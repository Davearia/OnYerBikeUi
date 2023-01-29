import { Injectable } from "@angular/core";

@Injectable()
export class OrderDetail{

    public productId?: number;
    public name?: string;
    public quantity?: number;
    public price?: number;   

}