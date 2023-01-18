import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CheckoutComponent } from './store/checkout/checkout.component';
import { AuthComponent } from './store/admin/auth/auth.component';
import { AdminComponent } from './store/admin/admin/admin.component';
import { CategoryEditorComponent } from './store/admin/category-editor/category-editor.component';
import { OrderListComponent } from './store/admin/order-list/order-list.component';
import { OrderViewComponent } from './store/admin/order-view/order-view.component';
import { ProductEditorComponent } from './store/admin/product-editor/product-editor.component';
import { SubcategoryEditorComponent } from './store/admin/subcategory-editor/subcategory-editor.component';

import { StoreFirstGuard } from './store/storeFirst.guard';
import { AuthGuard } from './store/admin/auth/auth.guard';

const routes: Routes = [{path:"product-list", component: ProductsComponent, canActivate: [StoreFirstGuard]},
                      {path:"product-details/:productId", component: ProductDetailsComponent, canActivate: [StoreFirstGuard]},
                      {path:"cart-details", component: CartDetailComponent, canActivate: [StoreFirstGuard]},                    
                      {path:"checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
                      {path:"auth", component: AuthComponent},
                      {path:"category-editor", component: CategoryEditorComponent},
                      {path:"order-list", component: OrderListComponent},
                      {path:"order-view", component: OrderViewComponent},
                      {path:"product-editor", component: ProductEditorComponent},
                      {path:"subcategory-editor", component: SubcategoryEditorComponent},
                      {path:"admin", component: AdminComponent},
                      {path: '**', component: ProductsComponent, canActivate: [StoreFirstGuard]}
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }