import { Component, OnInit } from '@angular/core';
import { ConfigService, ITableFields } from 'app/service/config.service';
import { StorageService } from 'app/service/storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-storage-list',
  templateUrl: './storage-list.component.html',
  styleUrls: ['./storage-list.component.scss']
})
export class StorageListComponent implements OnInit {

  tableFields: ITableFields[] = this.config.storageFields;
  list$: Observable<Storage[]> = this.storageService.getAll();

  constructor(
    private config: ConfigService,
    private storageService: StorageService
    
  ) { }

  ngOnInit(): void {
  }

}
