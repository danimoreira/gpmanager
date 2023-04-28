import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientJsonpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceProxyModule } from '@shared/service-proxies/service-proxy.module';
import { SharedModule } from '@shared/shared.module';
import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';
// tenants
import { TenantsComponent } from '@app/tenants/tenants.component';
import { CreateTenantDialogComponent } from './tenants/create-tenant/create-tenant-dialog.component';
import { EditTenantDialogComponent } from './tenants/edit-tenant/edit-tenant-dialog.component';
// roles
import { RolesComponent } from '@app/roles/roles.component';
import { CreateRoleDialogComponent } from './roles/create-role/create-role-dialog.component';
import { EditRoleDialogComponent } from './roles/edit-role/edit-role-dialog.component';
// users
import { UsersComponent } from '@app/users/users.component';
import { CreateUserDialogComponent } from '@app/users/create-user/create-user-dialog.component';
import { EditUserDialogComponent } from '@app/users/edit-user/edit-user-dialog.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { ResetPasswordDialogComponent } from './users/reset-password/reset-password.component';
// layout
import { HeaderComponent } from './layout/header.component';
import { HeaderLeftNavbarComponent } from './layout/header-left-navbar.component';
import { HeaderLanguageMenuComponent } from './layout/header-language-menu.component';
import { HeaderUserMenuComponent } from './layout/header-user-menu.component';
import { FooterComponent } from './layout/footer.component';
import { SidebarComponent } from './layout/sidebar.component';
import { SidebarLogoComponent } from './layout/sidebar-logo.component';
import { SidebarUserPanelComponent } from './layout/sidebar-user-panel.component';
import { SidebarMenuComponent } from './layout/sidebar-menu.component';
import { RouterModule } from '@angular/router';


// Measures
import { MeasureComponent } from './measure/measure.component';
import { CreateMeasureDialogComponent } from './measure/create-measure/create-measure-dialog.component';
import { EditMesaureDialogComponent } from './measure/edit-measure/edit-measure-dialog.component';

//Category Products
import { CategoryProductComponent } from './category-product/category-product.component';
import {CreateCategoryProductDialogComponent} from './category-product/create-category-product/create-category-product-dialog.component';
import {EditCategoryProductDialogComponent} from './category-product/edit-category-product/edit-category-product-dialog.component';

// Type Allocation
import { TypeAllocationComponent } from './type-allocation/type-allocation.component';
import { CreateTypeAllocationDialogComponent } from './type-allocation/create-type-allocation/create-type-allocation-product-dialog.component';
import { EditTypeAllocationDialogComponent } from './type-allocation/edit-type-allocation/edit-type-allocation-dialog.component';

//Worker
import { WorkerComponent } from "./worker/worker.component";
import { CreateWorkerDialogComponent } from "./worker/create-worker/create-worker-product-dialog.component";
import { EditWorkerDialogComponent } from './worker/edit-worker/edit-worker-dialog.component';

//Company
import { CompanyComponent } from "./company/company.component";
import {CreateCompanyDialogComponent} from "./company/create-company/create-company-dialog.component";
import {EditCompanyDialogComponent} from "./company/edit-company/edit-company-dialog.component";

// Product
import {ProductComponent} from "./product/product.component";
import { CreateProductDialogComponent } from './product/create-product/create-product-dialog.component';
import { EditProductDialogComponent } from './product/edit-product/edit-product-dialog.component';

// Prefecture
import {PrefectureComponent} from "./prefecture/prefecture.component";
import {EditPrefectureDialogComponent} from "./prefecture/edit-prefecture/edit-prefecture-dialog.component";
import {CreatePrefectureDialogComponent} from "./prefecture/create-prefecture/create-prefecture-dialog.component";

// Prefecture
import {AllocationComponent} from "./allocation/allocation.component";
import {EditAllocationDialogComponent} from "./allocation/edit-allocation/edit-allocation-dialog.component";
import {CreateAllocationDialogComponent} from "./allocation/create-allocation/create-allocation-dialog.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        // tenants
        TenantsComponent,
        CreateTenantDialogComponent,
        EditTenantDialogComponent,
        // roles
        RolesComponent,
        CreateRoleDialogComponent,
        EditRoleDialogComponent,
        // users
        UsersComponent,
        CreateUserDialogComponent,
        EditUserDialogComponent,
        ChangePasswordComponent,
        ResetPasswordDialogComponent,
        // layout
        HeaderComponent,
        HeaderLeftNavbarComponent,
        HeaderLanguageMenuComponent,
        HeaderUserMenuComponent,
        FooterComponent,
        SidebarComponent,
        SidebarLogoComponent,
        SidebarUserPanelComponent,
        SidebarMenuComponent,
        // Measure
        MeasureComponent,
        CreateMeasureDialogComponent,
        EditMesaureDialogComponent,
        //Category Product
        CategoryProductComponent,
        CreateCategoryProductDialogComponent,
        EditCategoryProductDialogComponent,
        //Type Allocation
        TypeAllocationComponent,
        CreateTypeAllocationDialogComponent,
        EditTypeAllocationDialogComponent,
        //Worker
        WorkerComponent,
        CreateWorkerDialogComponent,
        EditWorkerDialogComponent,
        //Company
        CompanyComponent,
        CreateCompanyDialogComponent,
        EditCompanyDialogComponent,
        //Product
        ProductComponent,
        CreateProductDialogComponent,
        EditProductDialogComponent,
        // Prefecture
        PrefectureComponent,
        EditPrefectureDialogComponent,
        CreatePrefectureDialogComponent,
        // Allocation
        AllocationComponent,
        EditAllocationDialogComponent,
        CreateAllocationDialogComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpClientJsonpModule,
        ModalModule.forChild(),
        BsDropdownModule,
        CollapseModule,
        TabsModule,
        AppRoutingModule,
        ServiceProxyModule,
        SharedModule,
        NgxPaginationModule,
        RouterModule,

    ],
    providers: [HttpClientModule]
})
export class AppModule {}
