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
import {Allocation} from '@shared/allocation/allocation';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { AllocationService } from '@shared/allocation/allocation.service';
import { TypeAllocation, TypeAllocationPagedResultDto } from '@shared/type-allocation/type-allocation';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';
import { PrefectureService } from '@shared/prefecture/prefecture.service';
import { Prefecture, PrefecturePagedResultDto } from '@shared/prefecture/prefecture';
@Component({
  templateUrl: './edit-allocation-dialog.component.html'
})
export class EditAllocationDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  allocation = new Allocation();

  id: number;

  keyword = '';
  isActive: boolean | null;

  typeAllocations: TypeAllocation[];
  prefectures: Prefecture[];

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: AllocationService,
    public _typeAllocationService: TypeAllocationService,
    public _prefectureService: PrefectureService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.allocation = result;
    });

    this.getListPrefectures();
    this.getListTypeAllocations();

  }

  getListPrefectures(): void{
    this._prefectureService.getAll(
      this.keyword,
      this.isActive,
      0,
      100
    )
    .pipe()
    .subscribe((result: PrefecturePagedResultDto) => {
      this.prefectures = result.items;
    });
  }


  getListTypeAllocations(): void{
    this._typeAllocationService.getAll(
      this.keyword,
      this.isActive,
      0,
      100
    )
    .pipe()
    .subscribe((result: TypeAllocationPagedResultDto) => {
      this.typeAllocations = result.items;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.allocation).subscribe(
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
