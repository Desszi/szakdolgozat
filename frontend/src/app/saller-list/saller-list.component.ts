import { Component, OnInit } from '@angular/core';
import { Saller } from 'app/model/saller';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { SallerService } from 'app/service/saller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-saller-list',
  templateUrl: './saller-list.component.html',
  styleUrls: ['./saller-list.component.scss']
})
export class SallerListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.sallerFields;
  list$: Observable<Saller[]> = this.sallerService.getAll();


  constructor(
    private config: ConfigService,
    private sallerService: SallerService
  ) { }

  ngOnInit(): void {
  }

}
