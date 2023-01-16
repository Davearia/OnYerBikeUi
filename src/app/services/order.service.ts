import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { Order } from "../model/order.model";

@Injectable()
export class OrderService {

	constructor(private http: HttpClient) {}
	
	saveOrder(order: Order): boolean{


		return true;
	}
		
}
	
