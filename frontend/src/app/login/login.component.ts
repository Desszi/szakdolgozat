import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Saller } from 'app/model/saller';
import { AuthentService } from 'app/service/authent.service';
import { SallerService } from 'app/service/saller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  saller: Saller = new Saller()
  constructor(
    private sallerService: SallerService,
    private authService: AuthentService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  setPassword():void {
    this.sallerService.update({_id: '61a6252cfc13ae2ff9000cee', password:'test'})
    .subscribe(res => console.log(res))
  }

  onLogin(): void {
    this.authService.loginUser(this.saller).subscribe(
      res => {
        if(res) {
          this.router.navigate(["/"]);
        }
      }
    )
  }

}
