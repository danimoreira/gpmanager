import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Allocation, AllocationPagedResultDto } from '@shared/allocation/allocation';
import { AllocationService } from '@shared/allocation/allocation.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateAllocationDialogComponent } from './create-allocation/create-allocation-dialog.component';
import { EditAllocationDialogComponent } from './edit-allocation/edit-allocation-dialog.component';

class PagedAllocationRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './allocation.component.html',
  animations: [appModuleAnimation()]
})
export class AllocationComponent extends PagedListingComponentBase<Allocation> {
  allocations: Allocation[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: AllocationService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createAllocation(): void {
    this.showCreateOrEditUserDialog();
    this.refresh();
  }

  editAllocation(allocation: Allocation): void {
    this.showCreateOrEditUserDialog(allocation.id);
    this.refresh();
  }

  protected list(
    request: PagedAllocationRequestDto,
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
      .subscribe((result: AllocationPagedResultDto) => {
        this.allocations = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateAllocationDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditAllocationDialogComponent,
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

  protected delete(allocation: Allocation): void {
    abp.message.confirm(
      this.l('AllocationDeleteWarningMessage', allocation.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(allocation.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
