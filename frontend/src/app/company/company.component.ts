import { HttpResponseBase } from '@angular/common/http';
import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { Company, CompanyPagedResultDto } from '@shared/company/company';
import { CompanyService } from '@shared/company/company.service';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs';
import { CreateCompanyDialogComponent } from './create-company/create-company-dialog.component';
import { EditCompanyDialogComponent } from './edit-company/edit-company-dialog.component';

class PagedCompanyRequestDto extends PagedRequestDto {
  keyword: string;
  isActive: boolean | null;
}

@Component({
  templateUrl: './company.component.html',
  animations: [appModuleAnimation()]
})
export class CompanyComponent extends PagedListingComponentBase<Company> {
  companies: Company[] = [];
  keyword = '';
  isActive: boolean | null;
  advancedFiltersVisible = false;

  constructor(
    injector: Injector,
    private _service: CompanyService,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  clearFilters(): void {
    this.keyword = '';
    this.isActive = undefined;
    this.getDataPage(1);
  }

  createCompany(): void {
    this.showCreateOrEditUserDialog();
    this.refresh();
  }

  editCompany(company: Company): void {
    this.showCreateOrEditUserDialog(company.id);
    this.refresh();
  }

  protected list(
    request: PagedCompanyRequestDto,
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
      .subscribe((result: CompanyPagedResultDto) => {
        this.companies = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  private showCreateOrEditUserDialog(id?: number): void {
    let createOrEditDialog: BsModalRef;
    if (!id) {
      createOrEditDialog = this._modalService.show(
        CreateCompanyDialogComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditDialog = this._modalService.show(
        EditCompanyDialogComponent,
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

  protected delete(company: Company): void {
    abp.message.confirm(
      this.l('CompanyDeleteWarningMessage', company.name),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service.delete(company.id).subscribe(() => {
            abp.notify.success(this.l('SuccessfullyDeleted'));
            this.refresh();
          });
        }
      }
    );
  }
}
