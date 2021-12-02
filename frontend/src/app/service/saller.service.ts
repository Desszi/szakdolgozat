import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Saller } from '../model/saller';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class SallerService extends BaseService<Saller> {

  constructor(
    public http: HttpClient
  ) { 
    super(http)
    this.entity = 'sallers'
  }
}
