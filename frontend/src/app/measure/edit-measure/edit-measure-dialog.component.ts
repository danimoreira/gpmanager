import {
  Component,
  Injector,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { forEach as _forEach, map as _map } from 'lodash-es';
import { AppComponentBase } from '../../../shared/app-component-base';
import {MeasuresService} from '../../../shared/measures/measures.service';
import {CreateMeasureDto, Measure} from '../../../shared/measures/Measure';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
@Component({
  templateUrl: './edit-measure-dialog.component.html'
})
export class EditMesaureDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  measure = new Measure();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: MeasuresService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.measure = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.measure).subscribe(
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
