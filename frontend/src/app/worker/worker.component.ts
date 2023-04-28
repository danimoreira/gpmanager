import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Worker, WorkerPagedResultDto } from '@shared/worker/worker';
import { WorkerService } from '@shared/worker/worker.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateWorkerDialogComponent } from './create-worker/create-worker-product-dialog.component';
import { EditWorkerDialogComponent } from './edit-worker/edit-worker-dialog.component';

class PagedWorkerRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './worker.component.html',
  animations: [appModuleAnimation()]
})
export class WorkerComponent extends PagedListingComponentBase<Worker> {
  Workers: Worker[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: WorkerService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createWorker(): void {
    this.showCreateOrEditUserDialog();
  }

  editWorker(Worker: Worker): void {
    this.showCreateOrEditUserDialog(Worker.id);
  }

  protected list(
    request: PagedWorkerRequestDto,
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
      .subscribe((result: WorkerPagedResultDto) => {
        this.Workers = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateWorkerDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditWorkerDialogComponent,
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

  protected delete(Worker: Worker): void {
    abp.message.confirm(
      this.l('WorkerDeleteWarningMessage', Worker.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(Worker.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
