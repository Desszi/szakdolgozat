import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from 'protractor';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class StorageService extends BaseService<Storage>{

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) {
    super(config,http)
    this.entity = 'storages';
   }
}
