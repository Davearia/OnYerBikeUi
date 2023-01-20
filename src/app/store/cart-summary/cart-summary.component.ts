import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Router } from "@angular/router";

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart: Cart, private router: Router) { }

  ngOnInit(): void {
  }
  
}
