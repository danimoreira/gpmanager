import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { TypeAllocation, TypeAllocationPagedResultDto } from '@shared/type-allocation/type-allocation';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateTypeAllocationDialogComponent } from './create-type-allocation/create-type-allocation-product-dialog.component';
import { EditTypeAllocationDialogComponent } from './edit-type-allocation/edit-type-allocation-dialog.component';

class PagedTypeAllocationRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './type-allocation.component.html',
  animations: [appModuleAnimation()]
})
export class TypeAllocationComponent extends PagedListingComponentBase<TypeAllocation> {
  typeAllocations: TypeAllocation[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: TypeAllocationService,
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

  editMeasure(measure: TypeAllocation): void {
    this.showCreateOrEditUserDialog(measure.id);
  }

  protected list(
    request: PagedTypeAllocationRequestDto,
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
      .subscribe((result: TypeAllocationPagedResultDto) => {
        this.typeAllocations = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateTypeAllocationDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditTypeAllocationDialogComponent,
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

  protected delete(measure: TypeAllocation): void {
    abp.message.confirm(
      this.l('TypeAllocationDeleteWarningMessage', measure.description),
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
