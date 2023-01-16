import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CheckoutComponent } from './store/checkout/checkout.component';
import { StoreFirstGuard } from './store/storeFirst.guard';

const routes: Routes = [{path:"product-list", component: ProductsComponent, canActivate: [StoreFirstGuard]},
                      {path:"product-details/:productId", component: ProductDetailsComponent, canActivate: [StoreFirstGuard]},
                      {path:"cart-details", component: CartDetailComponent, canActivate: [StoreFirstGuard]},                    
                      {path:"checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
                      {path: '**', component: ProductsComponent, canActivate: [StoreFirstGuard]}
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }