import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from 'src/app/store/product-list/product-list.component';
import { ProductDetailsComponent } from 'src/app/store/product-details/product-details.component';
import { CartDetailComponent } from 'src/app/store/cart-detail/cart-detail.component';
import { CheckoutComponent } from 'src/app/store/checkout/checkout.component';
import { AuthComponent } from 'src/app/store/admin/auth/auth.component';
import { AdminComponent } from 'src/app/store/admin/admin/admin.component';
import { OrdersComponent } from 'src/app/store/admin/orders/orders.component';
import { ProductEditorComponent } from 'src/app/store/admin/product-editor/product-editor.component';
import { UserComponent } from 'src/app/store/admin/user/user.component';

import { StoreFirstGuard } from '../url-guards/storeFirst.guard';
import { AuthGuard } from '../url-guards/auth.guard';

const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'product-details/:productId',
    component: ProductDetailsComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'cart-details',
    component: CartDetailComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  { path: 'auth', component: AuthComponent, canActivate: [StoreFirstGuard] },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard, StoreFirstGuard],
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGuard, StoreFirstGuard],
  },
  {
    path: 'product-editor',
    component: ProductEditorComponent,
    canActivate: [AuthGuard, StoreFirstGuard],
  },

  {
    path: 'users',
    component: UserComponent,
    canActivate: [AuthGuard, StoreFirstGuard],
  },

  {
    path: '**',
    component: ProductListComponent,
    canActivate: [StoreFirstGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
