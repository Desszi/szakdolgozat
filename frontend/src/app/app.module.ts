import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { SallerListComponent } from './saller-list/saller-list.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TransportListComponent } from './transport-list/transport-list.component';
import { StorageListComponent } from './storage-list/storage-list.component';
import { OrderListComponent } from './order-list/order-list.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { LoginComponent } from './login/login.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { SallerEditComponent } from './saller-edit/saller-edit.component';
import { StorageEditComponent } from './storage-edit/storage-edit.component';
import { TransportEditComponent } from './transport-edit/transport-edit.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BillEditComponent } from './bill-edit/bill-edit.component';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { OrderEditComponent } from './order-edit/order-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    CustomerEditComponent,
    SallerEditComponent,
    StorageEditComponent,
    TransportEditComponent,
    ProductEditComponent,
    OrderEditComponent,
    SortPipe,
    SearchPipe
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
