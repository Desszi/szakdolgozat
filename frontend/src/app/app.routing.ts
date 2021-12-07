import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { SallerEditComponent } from './saller-edit/saller-edit.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { StorageEditComponent } from './storage-edit/storage-edit.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  { path: 'login',
    component: LoginComponent
  },
  {
    path: 'bill-list/edit/:id',
    component: BillEditComponent
  },
  {
    path: 'order-list/edit/:id',
    component: OrderEditComponent
  },
  {
    path: 'product-list/edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'saller-list/edit/:id',
    component: SallerEditComponent
  },
  {
    path: 'customer-list/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'storage-list/edit/:id',
    component: StorageEditComponent
  },
  {
    path: 'transport-list/edit/:id',
    component: TransportEditComponent
  },
   {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
