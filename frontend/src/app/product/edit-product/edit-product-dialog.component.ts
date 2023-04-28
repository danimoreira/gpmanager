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
import {Product} from '@shared/product/product';

import { AbpValidationError } from '@shared/components/validation/abp-validation.api';
import { ProductService } from '@shared/product/product.service';
import { MeasuresService } from '@shared/measures/measures.service';
import { Measure, MeasurePagedResultDto } from '@shared/measures/Measure';
import { CategoryProduct, CategoryProductPagedResultDto } from '@shared/category-product/category-product';
import { CategoryProductService } from '@shared/category-product/category-product.service';
@Component({
  templateUrl: './edit-product-dialog.component.html'
})
export class EditProductDialogComponent extends AppComponentBase
  implements OnInit {
  saving = false;
  product = new Product();

  id: number;

  keyword = '';
  isActive: boolean | null;

  measures: Measure[];
  categoriesProduct: CategoryProduct[];

  @Output() onSave = new EventEmitter<any>();

  constructor(
    injector: Injector,
    public _service: ProductService,
    public _measureService: MeasuresService,
    public _categoryProductService: CategoryProductService,
    public bsModalRef: BsModalRef
  ) {
    super(injector);
  }

  ngOnInit(): void {
    this.getListMeasures();
    this.getListCategoriesProduct();
    this._service.get(this.id).subscribe((result) => {
      this.product = result;
    });
  }

  getListCategoriesProduct(): void{
    this._categoryProductService.getAll(
      this.keyword,
      this.isActive,
      0,
      100
    )
    .pipe()
    .subscribe((result: CategoryProductPagedResultDto) => {
      this.categoriesProduct = result.items;
    });
  }

  getListMeasures(): void{
    this._measureService.getAll(
      this.keyword,
      this.isActive,
      0,
      100
    )
    .pipe()
    .subscribe((result: MeasurePagedResultDto) => {
      this.measures = result.items;
    });
  }

  save(): void {
    this.saving = true;

    this._service.update(this.product).subscribe(
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
