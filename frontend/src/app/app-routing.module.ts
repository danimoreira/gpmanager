import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRouteGuard } from '@shared/auth/auth-route-guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { RolesComponent } from 'app/roles/roles.component';
import { ChangePasswordComponent } from './users/change-password/change-password.component';
import { MeasureComponent } from './measure/measure.component';
import { CategoryProductComponent } from './category-product/category-product.component';
import { TypeAllocationComponent } from './type-allocation/type-allocation.component';
import { WorkerComponent } from './worker/worker.component';
import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import { PrefectureComponent } from './prefecture/prefecture.component';
import { AllocationComponent } from './allocation/allocation.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AppComponent,
                children: [
                    { path: 'home', component: HomeComponent,  canActivate: [AppRouteGuard] },
                    { path: 'users', component: UsersComponent, data: { permission: 'Pages.Users' }, canActivate: [AppRouteGuard] },
                    { path: 'roles', component: RolesComponent, data: { permission: 'Pages.Roles' }, canActivate: [AppRouteGuard] },
                    { path: 'about', component: AboutComponent, canActivate: [AppRouteGuard] },
                    { path: 'update-password', component: ChangePasswordComponent, canActivate: [AppRouteGuard] },
                    { path: 'measures', component: MeasureComponent, data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'category-product', component: CategoryProductComponent, data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'type-allocation', component: TypeAllocationComponent,data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'worker', component: WorkerComponent,data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'company', component: CompanyComponent,data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'product', component: ProductComponent, data: { permission: 'Pages.Register' },canActivate: [AppRouteGuard] },
                    { path: 'prefecture', component: PrefectureComponent, data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                    { path: 'allocation', component: AllocationComponent,data: { permission: 'Pages.Register' }, canActivate: [AppRouteGuard] },
                ]
            }
        ])
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
