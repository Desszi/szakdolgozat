import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transport } from '../model/transport';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TransportService extends BaseService<Transport> {

  constructor(
    public http: HttpClient
  ) { 
    super(http)
    this.entity = 'transports';
   }
}
