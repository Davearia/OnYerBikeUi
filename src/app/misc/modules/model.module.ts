import { NgModule } from "@angular/core";

import { Cart } from "../../models/cart.model";
import { Product } from "src/app/models/product.model";
import { Order } from "src/app/models/order.model";
import { OrderDetail } from "src/app/models/order-detail";
import { ProductCategory } from "src/app/models/ProductCategory.model";
import { ProductSubCategory } from "src/app/models/productSubCategory.model";
import { ProductReview } from "src/app/models/productReview.model";
import { User } from "src/app/models/user.model";

@NgModule({
    providers: [Cart, Product, Order, OrderDetail, ProductCategory, ProductSubCategory, ProductReview, User]
})
export class ModelModule { }
