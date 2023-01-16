import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Order } from 'src/app/model/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public order: Order, private orderService: OrderService) { }

  ngOnInit(): void {
  }

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
     
        this.orderService.saveOrder(this.order).subscribe(order =>{
          this.order.clear();
          this.orderSent = true;
          this.submitted = false;
        });        
    }
    
  }

}
