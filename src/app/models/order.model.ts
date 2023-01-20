import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public orderId: number = 0;
    public name?: string;
    public address?: string;
    public city?: string;
    public state?: string;
    public postCode?: string;
    public country?: string;
    public shipped?: boolean = false;
    public orderDate: Date = new Date;
    public orderPrice?: number;
    public orderQuantity?: number;

    constructor(public cart: Cart) { }

    clear() {
        this.orderId = 0;
        this.name = this.address = this.city = undefined;
        this.state = this.postCode = this.country = undefined;
        this.shipped = false;
        this.cart.clear();
    }
}
