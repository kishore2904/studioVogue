import { Routes } from '@angular/router';
import { AdminAddProductsComponent } from './admin/admin-add-products/admin-add-products.component';
import { AdminHomePanelComponent } from './admin/admin-home-panel/admin-home-panel.component';
import { HomeComponent } from './main/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'admin-panel', component: AdminHomePanelComponent },
    { path: 'admin-add-products', component: AdminAddProductsComponent }
];
