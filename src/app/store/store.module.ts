import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { ProductsComponent } from "./product-list/product-list.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

import { CounterDirective } from "./counter.directive";
import { ProductService } from "src/app/services/product.service";


@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule,HttpClientModule],
    declarations: [StoreComponent, ProductsComponent, CounterDirective, ProductDetailsComponent, ProductDetailsComponent],
    exports: [StoreComponent, ProductsComponent, ProductDetailsComponent],
    providers:[ProductService]
})
export class StoreModule { }
