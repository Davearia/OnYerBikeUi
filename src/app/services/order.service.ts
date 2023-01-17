import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { Order } from "../model/order.model";
import { Product } from "../model/product.model";

@Injectable()
export class OrderService {

	constructor(private http: HttpClient) {}

	apiRoot: string = "http://localhost:5145/api/";
	public product: Product = new Product;
	
	saveOrder(order: Order): Observable<void>{		
		return this.http.post<Order>(this.apiRoot + "order", order)
		.pipe(map(data => {	
			this.product = data;		
			return
		}));		
	}
		
}
	
