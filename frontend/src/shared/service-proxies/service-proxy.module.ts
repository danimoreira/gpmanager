import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AbpHttpInterceptor } from 'abp-ng2-module';

import * as ApiServiceProxies from './service-proxies';
import { MeasuresService } from '@shared/measures/measures.service';
import { CategoryProductService } from '@shared/category-product/category-product.service';
import { TypeAllocationService } from '@shared/type-allocation/type-allocation.service';
import {WorkerService} from '@shared/worker/worker.service';
import { CompanyService } from "@shared/company/company.service";
import {ProductService} from "@shared/product/product.service";
import {PrefectureService} from '@shared/prefecture/prefecture.service';
import {AllocationService} from '@shared/allocation/allocation.service';

@NgModule({
    providers: [
        ApiServiceProxies.RoleServiceProxy,
        ApiServiceProxies.SessionServiceProxy,
        ApiServiceProxies.TenantServiceProxy,
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.TokenAuthServiceProxy,
        ApiServiceProxies.AccountServiceProxy,
        ApiServiceProxies.ConfigurationServiceProxy,
        MeasuresService,
        CategoryProductService,
        TypeAllocationService,
        WorkerService,
        CompanyService,
        ProductService,
        PrefectureService,
        AllocationService,
        { provide: HTTP_INTERCEPTORS, useClass: AbpHttpInterceptor, multi: true }
    ]
})
export class ServiceProxyModule { }
