import { Component, Injector, OnInit } from '@angular/core';
import { AppComponentBase } from '@shared/app-component-base';
import {
    Router,
    RouterEvent,
    NavigationEnd,
    PRIMARY_OUTLET
} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';
import { MenuItem } from '@shared/layout/menu-item';

@Component({
    selector: 'sidebar-menu',
    templateUrl: './sidebar-menu.component.html'
})
export class SidebarMenuComponent extends AppComponentBase implements OnInit {
    menuItems: MenuItem[];
    menuItemsMap: { [key: number]: MenuItem } = {};
    activatedMenuItems: MenuItem[] = [];
    routerEvents: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
    homeRoute = '/app/about';

    constructor(injector: Injector, private router: Router) {
        super(injector);
        this.router.events.subscribe(this.routerEvents);
    }

    ngOnInit(): void {
        this.menuItems = this.getMenuItems();
        this.patchMenuItems(this.menuItems);
        this.routerEvents
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe((event) => {
                const currentUrl = event.url !== '/' ? event.url : this.homeRoute;
                const primaryUrlSegmentGroup = this.router.parseUrl(currentUrl).root
                    .children[PRIMARY_OUTLET];
                if (primaryUrlSegmentGroup) {
                    this.activateMenuItems('/' + primaryUrlSegmentGroup.toString());
                }
            });
    }

    getMenuItems(): MenuItem[] {
        return [
            new MenuItem(this.l('HomePage'), '/app/home', 'fas fa-home'),

            new MenuItem(this.l('Cadastros'), '', 'fas fa-cogs', 'Pages.Register', [
                new MenuItem(
                    this.l('Company'),
                    '/app/company',
                    'fa fa-university',
                    'Pages.Register'
                ),

                new MenuItem(
                    this.l('Measures'),
                    '/app/measures',
                    'fa fa-balance-scale',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('CategoryProduct'),
                    '/app/category-product',
                    'fa fa-list-ul',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('TypeAllocation'),
                    '/app/type-allocation',
                    'fa fa-id-card',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('Products'),
                    '/app/product',
                    'fa fa-shopping-cart',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('Workers'),
                    '/app/worker',
                    'fa fa-male',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('Prefectures'),
                    '/app/prefecture',
                    'fa fa-building',
                    'Pages.Register'
                ),
                new MenuItem(
                    this.l('Allocations'),
                    '/app/allocation',
                    'fa fa-sitemap',
                    'Pages.Register'
                ),
            ]),

            new MenuItem('Operação', '', 'fas fa-gavel', '', [

            ]),

            new MenuItem('Relatórios', '', 'fas fa-book', '', [

            ]),

            new MenuItem('Segurança', '', 'fas fa-lock', '', [
                new MenuItem(
                    this.l('Roles'),
                    '/app/roles',
                    'fas fa-theater-masks',
                    'Pages.Roles'
                ),
                new MenuItem(
                    this.l('Users'),
                    '/app/users',
                    'fas fa-users',
                    'Pages.Users'
                ),
            ]),

            // new MenuItem(this.l('About'), '/app/about', 'fas fa-info-circle'),
        ];
    }

    patchMenuItems(items: MenuItem[], parentId?: number): void {
        items.forEach((item: MenuItem, index: number) => {
            item.id = parentId ? Number(parentId + '' + (index + 1)) : index + 1;
            if (parentId) {
                item.parentId = parentId;
            }
            if (parentId || item.children) {
                this.menuItemsMap[item.id] = item;
            }
            if (item.children) {
                this.patchMenuItems(item.children, item.id);
            }
        });
    }

    activateMenuItems(url: string): void {
        this.deactivateMenuItems(this.menuItems);
        this.activatedMenuItems = [];
        const foundedItems = this.findMenuItemsByUrl(url, this.menuItems);
        foundedItems.forEach((item) => {
            this.activateMenuItem(item);
        });
    }

    deactivateMenuItems(items: MenuItem[]): void {
        items.forEach((item: MenuItem) => {
            item.isActive = false;
            item.isCollapsed = true;
            if (item.children) {
                this.deactivateMenuItems(item.children);
            }
        });
    }

    findMenuItemsByUrl(
        url: string,
        items: MenuItem[],
        foundedItems: MenuItem[] = []
    ): MenuItem[] {
        items.forEach((item: MenuItem) => {
            if (item.route === url) {
                foundedItems.push(item);
            } else if (item.children) {
                this.findMenuItemsByUrl(url, item.children, foundedItems);
            }
        });
        return foundedItems;
    }

    activateMenuItem(item: MenuItem): void {
        item.isActive = true;
        if (item.children) {
            item.isCollapsed = false;
        }
        this.activatedMenuItems.push(item);
        if (item.parentId) {
            this.activateMenuItem(this.menuItemsMap[item.parentId]);
        }
    }

    isMenuItemVisible(item: MenuItem): boolean {
        if (!item.permissionName) {
            return true;
        }
        return this.permission.isGranted(item.permissionName);
    }
}
