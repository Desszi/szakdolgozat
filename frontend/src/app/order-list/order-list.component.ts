import { Component, OnInit } from '@angular/core';
import { Order } from 'app/model/order';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { OrderService } from 'app/service/order.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.orderFields;
  list$: Observable<Order[]> = this.orderService.getAll();

  constructor(
    private config: ConfigService,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
  }

}
