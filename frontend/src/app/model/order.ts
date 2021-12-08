import { Customer } from "./customer";
import { Product } from "./product";
import { Saller } from "./saller";
import { Transport } from "./transport";

export class Order {

    _id: string ="";
    time: Date = new Date();
    comment?: string = "";
    active: boolean = false;
    customer?: Customer =  new Customer();
    saller?: Saller = new Saller();
    products?: Product[] = [];
    transport?: Transport = new Transport();

}

