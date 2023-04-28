import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Prefecture, PrefecturePagedResultDto } from '@shared/prefecture/prefecture';
import { PrefectureService } from '@shared/prefecture/prefecture.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreatePrefectureDialogComponent } from './create-prefecture/create-prefecture-dialog.component';
import { EditPrefectureDialogComponent } from './edit-prefecture/edit-prefecture-dialog.component';

class PagedPrefectureRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './prefecture.component.html',
  animations: [appModuleAnimation()]
})
export class PrefectureComponent extends PagedListingComponentBase<Prefecture> {
  prefectures: Prefecture[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: PrefectureService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createPrefecture(): void {
    this.showCreateOrEditUserDialog();
    this.refresh();
  }

  editPrefecture(prefecture: Prefecture): void {
    this.showCreateOrEditUserDialog(prefecture.id);
    this.refresh();
  }

  protected list(
    request: PagedPrefectureRequestDto,
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
      .subscribe((result: PrefecturePagedResultDto) => {
        this.prefectures = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreatePrefectureDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditPrefectureDialogComponent,
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

  protected delete(prefecture: Prefecture): void {
    abp.message.confirm(
      this.l('PrefectureDeleteWarningMessage', prefecture.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(prefecture.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
