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

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { CreateWorkerDto } from '@shared/worker/worker';
import { WorkerService } from '@shared/worker/worker.service';

@Component({
  templateUrl: './create-worker-dialog.component.html'
})
export class CreateWorkerDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  Worker = new CreateWorkerDto();

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: WorkerService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.saving = true;

    this._service.create(this.Worker).subscribe(
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
