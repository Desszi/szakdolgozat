import { Component, OnInit } from '@angular/core';
import { Transport } from 'app/model/transport';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { TransportService } from 'app/service/transport.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transport-list',
  templateUrl: './transport-list.component.html',
  styleUrls: ['./transport-list.component.scss']
})
export class TransportListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.transportFields;
  list$: Observable<Transport[]> = this.transportService.getAll();

  
  constructor(
    private config: ConfigService,
    private transportService: TransportService
  ) { }

  ngOnInit(): void {
  }

}
