import { Component, OnInit } from '@angular/core';
import { Customer } from 'app/model/customer';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { CustomerService } from 'app/service/customer.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.customerFields;
  list$: Observable<Customer[]> = this.customerService.getAll();

  constructor(
    private config: ConfigService,
    private customerService: CustomerService
  ) { }

  ngOnInit(): void {
  }

}
