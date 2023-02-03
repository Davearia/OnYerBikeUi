import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BaseUiComponentComponent } from '../base-ui-component/base-ui-component.component';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent
  extends BaseUiComponentComponent
  implements OnInit
{
  orderSent: boolean = false;
  submitted: boolean = false;

  override ngOnInit(): void {}

  submitOrder(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.orderService.saveOrder(this.order).subscribe((order) => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      });
    }
  }
}
