import { Customer } from "./customer";
import { Product } from "./product";
import { Saller } from "./saller";

export class Bill {

    _id: string = "";
    grandTotal: number = 0;
    paid: boolean = false;
    customer: Customer =  new Customer();
    saller: Saller = new Saller(); 
    products?: Product[] = [];

}
