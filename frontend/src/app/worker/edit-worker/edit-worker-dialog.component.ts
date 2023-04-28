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
import {Worker} from '@shared/worker/worker';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { WorkerService } from '@shared/worker/worker.service';
@Component({
  templateUrl: './edit-worker-dialog.component.html'
})
export class EditWorkerDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  Worker = new Worker();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: WorkerService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.Worker = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.Worker).subscribe(
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
