import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Product, ProductPagedResultDto } from '@shared/product/product';
import { ProductService } from '@shared/product/product.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateProductDialogComponent } from './create-product/create-product-dialog.component';
import { EditProductDialogComponent } from './edit-product/edit-product-dialog.component';
import { MeasuresService } from '@shared/measures/measures.service';

class PagedProductRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './product.component.html',
  animations: [appModuleAnimation()]
})
export class ProductComponent extends PagedListingComponentBase<Product> {
  products: Product[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: ProductService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createProduct(): void {
    this.showCreateOrEditUserDialog();
    this.refresh();
  }

  editProduct(Product: Product): void {
    this.showCreateOrEditUserDialog(Product.id);
    this.refresh();
  }

  protected list(
    request: PagedProductRequestDto,
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
      .subscribe((result: ProductPagedResultDto) => {
        this.products = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateProductDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditProductDialogComponent,
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

  protected delete(Product: Product): void {
    abp.message.confirm(
      this.l('ProductDeleteWarningMessage', Product.description),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(Product.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
