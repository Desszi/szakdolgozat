import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'VIR kezdőoldala',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Felhasználóról',  icon:'person', class: '' },
    { path: '/product-list', title: 'Termékek',  icon:'precision_manufacturing', class: '' },
    { path: '/customer-list', title: 'Vevők',  icon:'people', class: '' },
    { path: '/saller-list', title: 'Eladók',  icon:'support_agent', class: '' },
    { path: '/bill-list', title: 'Számlák',  icon:'receipt_long', class: '' },
    { path: '/order-list', title: 'Megrendelések',  icon:'shopping_cart', class: '' },
    { path: '/storage-list', title: 'Raktárak',  icon:'maps_home_work', class: '' },
    { path: '/transport-list', title: 'Szállítások',  icon:'local_shipping', class: '' }
    /*{ path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' } */
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
