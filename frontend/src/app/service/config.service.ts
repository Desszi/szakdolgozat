import { CurrencyPipe } from '@angular/common';
import { Injectable } from '@angular/core';

export interface ITableFields {
  key: string,
  title: string,
  hidden?: boolean,
  pipeTransform?: any,
  htmlIcon?: any
}

@Injectable({
  providedIn: 'root'
})


export class ConfigService {

  public readonly apiURL: string = 'http:://localhost:3000/';

  customerFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "last_name", title: "Vezetéknév"},
    {key: "first_name", title: "Keresztnév"},
    {key: "birthDate", title: "Születési dátum"},
    {key: "birthPlace", title: "Születési hely"},
    {key: "email", title: "Email cím"},
    {key: "address", title:"Lakcím"},
    {key: "phone", title:" Telefonszám"},
    {key: "active", title: "Atkív?", htmlIcon: ConfigService.iconActive},
    {key: "orders", title: "Megrendelések"}
  ]

  sallerFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "last_name", title: "Vezetéknév"},
    {key: "first_name", title: "Keresztnév"},
    {key: "birthDate", title: "Születési dátum"},
    {key: "birthPlace", title: "Születési hely"},
    {key: "email", title: "Email cím"},
    {key: "address", title:"Lakcím"},
    {key: "phone", title:" Telefonszám"},
    {key: "active", title: "Atkív?", htmlIcon: ConfigService.iconActive}
  ]

  billFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "grandTotal", title: "Végösszeg",  pipeTransform: (v: number) => `${v} Ft`},
    {key: "paid", title: "Fizetve?", htmlIcon: ConfigService.iconActive},
    {key: "customer", title: "Vevő"},
    {key: "saller", title: "Eladó"},
    {key: "products", title: "Megvásárolt termékek"}  
  ]


  orderFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "time", title: "Megrendelés ideje"},
    {key: "comment", title: "Hozzászólás"},
    {key: "active", title: "Aktív?", htmlIcon: ConfigService.iconActive},
    {key: "customer", title: "Vevő"},
    {key: "saller", title: "Eladó"},
    {key: "products", title: "Megvásárolt termékek"}, 
    {key: "transport", title: "Szállítás"}  
  ]

  transportFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "travelBy", title: "Utazási eszköz"}, 
    {key: "destination", title: "Cél állomás"}, 
    {key: "saller", title: "Eladó"},
    {key: "products", title: "Rakomány"}, 
    {key: "startStorage", title: "Kiinduló állomás"}, 
  ]

  storageFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "name", title: "Raktár neve"},
    {key: "address", title: "Raktár címe"},
    {key: "opened", title: "Nyitva?", htmlIcon: ConfigService.iconActive},
    {key: "products", title: "Tárolt termékek"}
    
  ]

  productFields: ITableFields[] = [
    {key: "_id", title: "ID"}, 
    {key: "name", title: "Termék neve"},
    {key: "description", title: "Leírása"},
    {key: "price", title: "Ára", pipeTransform: (v: number) => `${v} Ft` },
    {key: "available", title: "Elérhető?", htmlIcon: ConfigService.iconActive},
    {key: "storage", title: "Raktára"},
  ]


  constructor() { }

  static iconActive(v: boolean): string {
    const icon: string = v ? 'fa-check': 'fa-ban';
    return `<i class="fas ${icon}"></i>`;
  }
}
