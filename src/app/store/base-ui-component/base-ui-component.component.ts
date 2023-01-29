import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { StateService } from 'src/app/services/misc/state.service';
import { ProductService } from 'src/app/services/http-services/product.service';
import { OrderService } from 'src/app/services/http-services/order.service';
import { UserService } from 'src/app/services/http-services/user.service';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-base-ui-component',
  templateUrl: './base-ui-component.component.html',
  styleUrls: ['./base-ui-component.component.css'],
})
export class BaseUiComponentComponent implements OnInit {
  order: Order = new Order(this.cart);

  constructor(
    public productService: ProductService,
    public orderService: OrderService,
    public userService: UserService,
    public state: StateService,
    public router: Router,
    public route: ActivatedRoute,
    public cart: Cart
  ) {}

  ngOnInit() {}
}
