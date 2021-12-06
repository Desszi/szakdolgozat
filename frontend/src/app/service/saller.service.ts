import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saller } from '../model/saller';
import { BaseService } from './base.service';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class SallerService extends BaseService<Saller> {

  constructor(
    public config: ConfigService,
    public http: HttpClient
  ) { 
    super(config,http)
    this.entity = 'sallers'
  }
}
