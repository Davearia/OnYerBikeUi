import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { Order } from "../model/order.model";
import { AppConfig } from 'src/config/app-config';
import { Cart } from "../model/cart.model";

@Injectable()
export class OrderService {

	constructor(private http: HttpClient,
		private appConfig: AppConfig) {
			this.apiRoot = appConfig.webApiRoot;
		}

	apiRoot: string | undefined;
		
	private cart: Cart = new Cart;
	public order: Order = new Order(this.cart);
	
	saveOrder(order: Order): Observable<void>{		
		return this.http.post<Order>(this.apiRoot + "order", order)
		.pipe(map(data => {	
			this.order = data;		
			return
		}));		
	}
		
}
	
