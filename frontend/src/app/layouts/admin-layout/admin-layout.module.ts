import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import { CustomerListComponent } from 'app/customer-list/customer-list.component';
import { SallerListComponent } from 'app/saller-list/saller-list.component';
import { ProductListComponent } from 'app/product-list/product-list.component';
import { BillListComponent } from 'app/bill-list/bill-list.component';
import { TransportListComponent } from 'app/transport-list/transport-list.component';
import { OrderListComponent } from 'app/order-list/order-list.component'; 
import { StorageListComponent } from 'app/storage-list/storage-list.component';
import { BillEditComponent } from 'app/bill-edit/bill-edit.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    CustomerListComponent,
    SallerListComponent,
    ProductListComponent,
    TransportListComponent,
    StorageListComponent,
    OrderListComponent,
    BillListComponent,
    BillEditComponent
  ]
})

export class AdminLayoutModule {}
