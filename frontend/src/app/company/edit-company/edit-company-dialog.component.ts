import {
  Component,
  Injector,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { AppComponentBase } from '@shared/app-component-base';
import {Company} from '@shared/company/company';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { CompanyService } from '@shared/company/company.service';
@Component({
  templateUrl: './edit-company-dialog.component.html'
})
export class EditCompanyDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  company = new Company();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  emailValidationError: Partial<AbpValidationError>[] = [
    {
      name: 'pattern',
      localizationKey:
        'EmailIsInvalid',
    },
  ];

  constructor(
    injector: Injector,
    public _service: CompanyService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.company = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.company).subscribe(
      () => {
        this.notify.info(this.l('SavedSuccessfully'));
        this.bsModalRef.hide();
        this.onSave.emit();
      },
      () => {
        this.saving = false;
      }
    );
  }
}
