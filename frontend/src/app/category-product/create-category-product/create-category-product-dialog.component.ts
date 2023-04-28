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
import { CreateCategoryProductDto } from '@shared/category-product/category-product';
import { CategoryProductService } from '@shared/category-product/category-product.service';

@Component({
  templateUrl: './create-category-product-dialog.component.html'
})
export class CreateCategoryProductDialogComponent extends AppComponentBase implements OnInit {
  saving = false;
  categoryProduct = new CreateCategoryProductDto();

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: CategoryProductService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {

  }

  save(): void {
    this.saving = true;

    this._service.create(this.categoryProduct).subscribe(
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
