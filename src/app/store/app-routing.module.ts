import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartDetailComponent } from "./cart-detail/cart-detail.component";
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthComponent } from './admin/auth/auth.component';
import { AdminComponent } from './admin/admin/admin.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { ProductEditorComponent } from './admin/product-editor/product-editor.component';

import { StoreFirstGuard } from './storeFirst.guard';
import { AuthGuard } from './admin/auth/auth.guard';

const routes: Routes = [{path:"product-list", component: ProductsComponent, canActivate: [StoreFirstGuard]},
                      {path:"product-details/:productId", component: ProductDetailsComponent, canActivate: [StoreFirstGuard]},
                      {path:"cart-details", component: CartDetailComponent, canActivate: [StoreFirstGuard]},                    
                      {path:"checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},

                      {path:"auth", component: AuthComponent, canActivate: [StoreFirstGuard]},                  
                      {path:"orders", component: OrdersComponent},
                      {path:"product-editor", component: ProductEditorComponent, canActivate: [AuthGuard, StoreFirstGuard]},                    
                      {path:"admin", component: AdminComponent, canActivate: [AuthGuard, StoreFirstGuard]},

                      {path: '**', component: ProductsComponent, canActivate: [StoreFirstGuard]}
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }