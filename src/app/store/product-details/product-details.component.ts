import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/models/product.model';
import { BaseUiComponentComponent } from '../base-ui-component/base-ui-component.component';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent
  extends BaseUiComponentComponent
  implements OnInit
{
  product: Product = new Product();

  override ngOnInit() {
    this.route.params.subscribe((params) =>
      this.loadProduct(params['productId'])
    );
  }

  loadProduct(strProductId: string) {
    if (Number(strProductId)) {
      this.product = this.productService.getProductById(parseInt(strProductId));
    }
  }

  addToCart() {
    console.log(this.product);
    this.cart.addLine(this.product);
    this.router.navigate(['product-list']);
  }

  returnToProducts() {
    this.router.navigate(['product-list']);
  }
}
