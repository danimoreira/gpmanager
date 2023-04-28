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
import {Prefecture} from '@shared/prefecture/prefecture';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { PrefectureService } from '@shared/prefecture/prefecture.service';
@Component({
  templateUrl: './edit-prefecture-dialog.component.html'
})
export class EditPrefectureDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  Prefecture = new Prefecture();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: PrefectureService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.Prefecture = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.Prefecture).subscribe(
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
