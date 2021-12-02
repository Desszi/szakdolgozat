import { Component} from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './model/customer';
import { CustomerService } from './service/customer.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';

  customers: Observable<Customer[]> = this.customerService.getAll();
  
  constructor(
    private customerService: CustomerService
  ) {}
}

