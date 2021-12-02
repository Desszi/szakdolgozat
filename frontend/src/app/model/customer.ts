import { Order } from "./order";

export class Customer {

    _id: string = "";
    first_name: string = "";
    last_name: string = "";
    birthDate?: Date = new Date();
    birthPlace?: string ="";
    email: string = "";
    address?: string = "";
    phone?: string =""; 
    active?: boolean = true;
    orders?: Order[] = [];
    password?: string='';
    accessToken?: string ='';
}
