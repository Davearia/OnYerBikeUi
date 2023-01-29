import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';

import { BaseService } from './base.service';
import { Order } from 'src/app/models/order.model';
import { Cart } from 'src/app/models/cart.model';
import { OrderDetail } from 'src/app/models/order-detail';

@Injectable()
export class OrderService extends BaseService {
  private cart: Cart = new Cart();
  public order: Order = new Order(this.cart);
  public orderDetails: OrderDetail[] = [];
  public orders: Order[] = [];

  loadOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.apiRoot + 'Order').pipe(
      map((data) => {
        this.orders = data;
        return this.orders;
      })
    );
  }

  loadOrderDetails(orderId: number): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.apiRoot + 'Order/' + orderId).pipe(
      map((data) => {
        this.orderDetails = data;
        return this.orderDetails;
      })
    );
  }

  saveOrder(order: Order): Observable<void> {
    return this.http.post<Order>(this.apiRoot + 'order', order).pipe(
      map((data) => {
        this.order = data;
        return;
      })
    );
  }

  getOrders(): Order[] {
    return this.orders;
  }
}
