import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { CounterDirective } from "./counter.directive";
import { ProductService } from "src/app/services/product.service";
import { OrderService } from "../services/order.service";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from "./storeFirst.guard";
import { Order } from "../model/order.model";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, HttpClientModule, RouterModule],

    declarations: [StoreComponent, ProductsComponent, CounterDirective, ProductDetailsComponent, ProductDetailsComponent, 
        CartDetailComponent, CartSummaryComponent, CheckoutComponent],

    exports: [StoreComponent, ProductsComponent, ProductDetailsComponent, CartDetailComponent, CheckoutComponent],

    providers:[ProductService, OrderService, StoreComponent, StoreFirstGuard, Order]
})
export class StoreModule { }
