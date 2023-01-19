import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/model/order.model';
import { Cart } from 'src/app/model/cart.model';
import { OrderDetail } from 'src/app/model/order-detail';

@Component({
  selector: 'app-order-view',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private orderService: OrderService) { }

  ordersPerPage = 8;
  selectedPage = 1;
  inPreviewMode: boolean = false
  cart: Cart = new Cart;
  selectedOrder: Order = new Order(this.cart);
  orderDetails: OrderDetail[] = [];

  ngOnInit(): void {
    this.orderService.loadOrders()
        .subscribe();
  }

  get orders(): Order[] {       
    let pageIndex = (this.selectedPage - 1) * this.ordersPerPage   
    return this.orderService.getOrders()       
        .slice(pageIndex, pageIndex + this.ordersPerPage);
  }

changePage(newPage: number) {
    this.selectedPage = newPage;
}

changePageSize(newSize: number) {
    this.ordersPerPage = Number(newSize);
    this.changePage(1);
}

get pageCount(): number {       
    return Math.ceil(this.orderService.orders.length / this.ordersPerPage);
} 

viewOrderDetails(order: Order){
  if(order != null){
    this.selectedOrder = order;

    this.orderService.loadOrderDetails(this.selectedOrder.orderId).subscribe(orderDetails =>{
      this.orderDetails = orderDetails;
      this.inPreviewMode = true; 
    });       
  }
}

closeOrderDetails(){
  this.inPreviewMode = false; 
}

}
