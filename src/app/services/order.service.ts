import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { Order } from "../model/order.model";
import { Product } from "../model/product.model";
import { AppConfig } from 'src/config/app-config';

@Injectable()
export class OrderService {

	constructor(private http: HttpClient,
		private appConfig: AppConfig) {
			this.apiRoot = appConfig.webApiRoot;
		}

	apiRoot: string | undefined;
	
	public product: Product = new Product;
	
	saveOrder(order: Order): Observable<void>{		
		return this.http.post<Order>(this.apiRoot + "order", order)
		.pipe(map(data => {	
			this.product = data;		
			return
		}));		
	}
		
}
	
