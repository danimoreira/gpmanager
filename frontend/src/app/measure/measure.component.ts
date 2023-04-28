import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Measure, MeasurePagedResultDto } from '@shared/measures/Measure';
import { MeasuresService } from '@shared/measures/measures.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize, Observable } from 'rxjs';
import { CreateMeasureDialogComponent } from './create-measure/create-measure-dialog.component';
import { EditMesaureDialogComponent } from './edit-measure/edit-measure-dialog.component';

class PagedMeasureRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './measure.component.html',
  animations: [appModuleAnimation()]
})
export class MeasureComponent extends PagedListingComponentBase<Measure> {
  measures: Measure[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: MeasuresService,
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

  editMeasure(measure: Measure): void {
    this.showCreateOrEditUserDialog(measure.id);
  }

  protected list(
    request: PagedMeasureRequestDto,
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
      .subscribe((result: MeasurePagedResultDto) => {
        this.measures = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateMeasureDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditMesaureDialogComponent,
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

  protected delete(measure: Measure): void {
    abp.message.confirm(
      this.l('MeasureDeleteWarningMessage', measure.description),
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
