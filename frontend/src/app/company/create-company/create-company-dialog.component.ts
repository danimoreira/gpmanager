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

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { CreateCompanyDto } from '@shared/company/company';
import { CompanyService } from '@shared/company/company.service';

@Component({
  templateUrl: './create-company-dialog.component.html'
})
export class CreateCompanyDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  company = new CreateCompanyDto();

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
    this.company.isActive = true;

    this.company.address = {
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "MG",
      zipCode: ""
    };
  }

  save(): void {
    this.saving = true;

    this._service.create(this.company).subscribe(
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
