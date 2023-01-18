import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { CounterDirective } from "./counter.directive";
import { StoreFirstGuard } from "./storeFirst.guard";

import { RestDataSource } from "../services/rest.datasource";

import { ProductService } from "src/app/services/product.service";
import { OrderService } from "../services/order.service";
import { AuthService } from "../services/auth.service";

import { ModelModule } from "../model/model.module";
import { Order } from "../model/order.model";

import { StoreComponent } from "./store.component";
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminComponent } from "./admin/admin.component";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, HttpClientModule, RouterModule],

    declarations: [StoreComponent, ProductsComponent, CounterDirective, ProductDetailsComponent, ProductDetailsComponent, 
        CartDetailComponent, CartSummaryComponent, CheckoutComponent, AdminComponent],

    exports: [StoreComponent, ProductsComponent, ProductDetailsComponent, CartDetailComponent, CheckoutComponent, AdminComponent],

    providers:[ProductService, OrderService, AuthService
        , StoreComponent, StoreFirstGuard, Order, RestDataSource]
})
export class StoreModule { }
