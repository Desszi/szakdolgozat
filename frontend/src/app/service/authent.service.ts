import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from 'app/model/customer';
import { Saller } from 'app/model/saller';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConfigService } from './config.service';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentService {

  currentUserSubject$: BehaviorSubject<Saller | null> = new BehaviorSubject<Saller | null>(null)
  
  lastToken: string = "";
  loginURL: string = `${this.configService.apiURL}login`

  constructor(
    private configService: ConfigService,
    private http: HttpClient,
    private router: Router
  ) {
    if (localStorage.currentUser) {
      const saller: Saller = JSON.parse(localStorage.currentUser)
      this.lastToken = saller.accessToken ||''
      this.currentUserSubject$.next(saller) 
    }
   }

  loginUser(loginData: Saller): Observable<Saller | null> {
    return this.http.post<{saller: Saller, accesToken: string}>(
      this.loginURL, loginData
    ).pipe( map(res => {
      if (res.saller && res.accesToken) {
        this.lastToken = res.accesToken;
        res.saller.accessToken = res.accesToken
        this.currentUserSubject$.next(res.saller)
        localStorage.currentUser = JSON.stringify(res.saller)
        return res.saller
      }
      return null;
    }))
  }

  logout(): void {
   this.lastToken  =""
   this.currentUserSubject$.next(null)
   localStorage.removeItem("currentUser")
   this.router.navigate(['/', 'login']);
  }
}
