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
import { CreateAllocationDto } from '@shared/allocation/allocation';
import { AllocationService } from '@shared/allocation/allocation.service';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';
import { PrefectureService } from '@shared/prefecture/prefecture.service';
import { Prefecture, PrefecturePagedResultDto } from '@shared/prefecture/prefecture';
import { TypeAllocation, TypeAllocationPagedResultDto } from '@shared/type-allocation/type-allocation';

@Component({
  templateUrl: './create-allocation-dialog.component.html'
})
export class CreateAllocationDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  allocation = new CreateAllocationDto();

  @Output() onSave = new EventEmitter<any>();

  keyword = '';
  isActive: boolean | null;

  typeAllocations: TypeAllocation[];
  prefectures: Prefecture[];

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
    this.allocation.isActive = true;
    this.allocation.address = {
      street: "",
      number: "",
      complement: "",
      district: "",
      city: "",
      state: "MG",
      zipCode: ""
    };
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

    this._service.create(this.allocation).subscribe(
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
