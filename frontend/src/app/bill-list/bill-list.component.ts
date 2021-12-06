import { Component, OnInit } from '@angular/core';
import { Bill } from 'app/model/bill';
import { BillService } from 'app/service/bill.service';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.scss']
})
export class BillListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.billFields;
  list$: Observable<Bill[]> = this.billService.getAll();

  constructor(
    private config: ConfigService,
    private billService: BillService
  ) { }
  
  ngOnInit(): void {
  }

}
