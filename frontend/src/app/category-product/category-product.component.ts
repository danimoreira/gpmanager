import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { CategoryProduct, CategoryProductPagedResultDto } from '@shared/category-product/category-product';
import { CategoryProductService } from '@shared/category-product/category-product.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateCategoryProductDialogComponent } from './create-category-product/create-category-product-dialog.component';
import { EditCategoryProductDialogComponent } from './edit-category-product/edit-category-product-dialog.component';

class PagedCategoryProductRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './category-product.component.html',
  animations: [appModuleAnimation()]
})
export class CategoryProductComponent extends PagedListingComponentBase<CategoryProduct> {
  categories: CategoryProduct[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: CategoryProductService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createMeasure(): void {
    this.showCreateOrEditUserDialog();
  }

  editMeasure(measure: CategoryProduct): void {
    this.showCreateOrEditUserDialog(measure.id);
  }

  protected list(
    request: PagedCategoryProductRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    request.isActive = this.isActive;

    this._service
      .getAll(
        request.keyword,
        request.isActive,
        request.skipCount,
        request.maxResultCount
      )
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: CategoryProductPagedResultDto) => {
        this.categories = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateCategoryProductDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditCategoryProductDialogComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }

  protected delete(measure: CategoryProduct): void {
    abp.message.confirm(
      this.l('CategoryProductDeleteWarningMessage', measure.description),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(measure.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
