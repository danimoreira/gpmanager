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
import { CreateTypeAllocationDto } from '@shared/type-allocation/type-allocation';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';

@Component({
  templateUrl: './create-type-allocation-dialog.component.html'
})
export class CreateTypeAllocationDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  TypeAllocation = new CreateTypeAllocationDto();

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: TypeAllocationService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
  }

  save(): void {
    this.saving = true;

    this._service.create(this.TypeAllocation).subscribe(
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
