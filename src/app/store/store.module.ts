import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { CounterDirective } from "./misc/custom-directives/counter.directive";

import { StoreFirstGuard } from "./misc/url-guards/storeFirst.guard";
import { AuthGuard } from "./admin/misc/url-guards/auth.guard";

import { ProductService } from "src/app/services/product.service";
import { OrderService } from "src/app/services/order.service";
import { UseService } from "../services/user.service";
import { AuthService } from "src/app/services/auth.service";

import { ModelModule } from "src/app/models/model.module";
import { Order } from "src/app/models/order.model";
import { StoreComponent } from "./store/store.component";
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CartSummaryComponent } from "./cart-summary/cart-summary.component";
import { CheckoutComponent } from "./checkout/checkout.component";
import { AdminComponent } from "./admin/admin/admin.component";
import { AuthComponent } from "./admin/auth/auth.component";
import { AdminBannerComponent } from "./admin/admin-banner/admin-banner.component";
import { OrdersComponent } from "./admin/orders/orders.component";
import { ProductEditorComponent } from "./admin/product-editor/product-editor.component";
import { MaterialModule } from "../material.module";
import { UserComponent } from './admin/user/user.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, HttpClientModule, RouterModule, MaterialModule],

    declarations: [StoreComponent, ProductsComponent, CounterDirective, ProductDetailsComponent, ProductDetailsComponent, 
        CartDetailComponent, CartSummaryComponent, CheckoutComponent, AdminComponent, AuthComponent, AdminBannerComponent,
        OrdersComponent, ProductEditorComponent, UserComponent
    ],

    exports: [StoreComponent, ProductsComponent, ProductDetailsComponent, CartDetailComponent, CheckoutComponent, AdminComponent, AuthComponent,
        OrdersComponent, ProductEditorComponent],

    providers:[ProductService, OrderService, UseService, AuthService
        , StoreComponent, StoreFirstGuard, Order, AuthGuard]
})
export class StoreModule { }
