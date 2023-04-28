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
  import {CreateMeasureDto} from '../../../shared/measures/Measure';

  import { AbpValidationError } from '@shared/components/validation/abp-validation.api';

  @Component({
    templateUrl: './create-measure-dialog.component.html'
  })
  export class CreateMeasureDialogComponent extends AppComponentBase implements OnInit {
    saving = false;
    measure = new CreateMeasureDto();

    @Output() onSave = new EventEmitter<any>();

    constructor(
      injector: Injector,
      public _service: MeasuresService,
      public bsModalRef: BsModalRef
    ) {
      super(injector);
    }

    ngOnInit(): void {
    }

    save(): void {
      this.saving = true;

      this._service.create(this.measure).subscribe(
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
