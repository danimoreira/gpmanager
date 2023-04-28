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
import {TypeAllocation} from '@shared/type-allocation/type-allocation';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';
@Component({
  templateUrl: './edit-type-allocation-dialog.component.html'
})
export class EditTypeAllocationDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  TypeAllocation = new TypeAllocation();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: TypeAllocationService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.TypeAllocation = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.TypeAllocation).subscribe(
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
