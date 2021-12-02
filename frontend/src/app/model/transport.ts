import { Product } from "./product";
import { Saller } from "./saller";

export class Transport {

    _id: string ="" ;
    travelBy?: string ="";
    destination: string ="" ; 
    saller?: Saller = new Saller();
    products?: Product[] = [];
    startStorage?: Storage = new Storage();
}
