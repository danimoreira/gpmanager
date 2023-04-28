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
import { CreatePrefectureDto } from '@shared/prefecture/prefecture';
import { PrefectureService } from '@shared/prefecture/prefecture.service';

@Component({
  templateUrl: './create-prefecture-dialog.component.html'
})
export class CreatePrefectureDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  prefecture = new CreatePrefectureDto();

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: PrefectureService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.prefecture.isActive = true;
    this.prefecture.address = {
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

    this._service.create(this.prefecture).subscribe(
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
