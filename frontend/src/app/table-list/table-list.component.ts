import { Component, Input, OnInit } from '@angular/core';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent<T extends {[propname: string]: any}> implements OnInit {
  
  @Input() tableFields: ITableFields[] = [];
  @Input() list$: Observer<T[] | null> = null;

  constructor(
    private config: ConfigService,
 
  ) { }
  ngOnInit() {
  }

}
