import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './store/product-list/product-list.component';
import { ProductDetailsComponent } from './store/product-details/product-details.component';

const routes: Routes = [{path:"product-list", component: ProductsComponent},
                      {path:"product-details/:productId", component: ProductDetailsComponent},
                      {path: '**', component: ProductsComponent}
                    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }