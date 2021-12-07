import { Product } from "./product";

export class Storage{
    _id: string ="";
    name?: string = "";
    address?: string = "";
    opened?: boolean = true;
    products?: Product[] = [];

}

