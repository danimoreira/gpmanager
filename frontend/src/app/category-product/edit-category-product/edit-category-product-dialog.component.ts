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
import {CategoryProduct} from '../../../shared/category-product/category-product';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { CategoryProductService } from '@shared/category-product/category-product.service';
@Component({
  templateUrl: './edit-category-product-dialog.component.html'
})
export class EditCategoryProductDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  categoryProduct = new CategoryProduct();

  id: number;

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: CategoryProductService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this._service.get(this.id).subscribe((result) => {
      this.categoryProduct = result;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.categoryProduct).subscribe(
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
