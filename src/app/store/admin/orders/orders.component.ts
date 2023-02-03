import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { BaseUiComponentComponent } from '../../base-ui-component/base-ui-component.component';
import { Order } from 'src/app/models/order.model';
import { OrderDetail } from 'src/app/models/order-detail';

@Component({
  selector: 'app-order-view',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent
  extends BaseUiComponentComponent
  implements OnInit
{
  ordersPerPage = 4;
  selectedPage = 1;
  inPreviewMode: boolean = false;
  selectedOrder: Order = new Order(this.cart);
  orderDetails: OrderDetail[] = [];
  displayedColumns: string[] = [
    'name',
    'address',
    'orderDate',
    'orderPrice',
    'orderQuantity',
    'details',
  ];
  dataSource!: MatTableDataSource<Order>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) matSort!: MatSort;

  override ngOnInit(): void {
    this.orderService.loadOrders().subscribe((orders) => {
      this.dataSource = new MatTableDataSource<Order>(orders);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    });
  }

  filterData($event: any) {
    this.dataSource.filter = $event.target.value;
  }

  viewOrderDetails(order: Order) {
    if (order != null) {
      this.selectedOrder = order;
      this.orderService
        .loadOrderDetails(this.selectedOrder.orderId)
        .subscribe((orderDetails) => {
          this.orderDetails = orderDetails;
          this.inPreviewMode = true;
        });
    }
  }

  closeOrderDetails() {
    this.inPreviewMode = false;
  }
}
