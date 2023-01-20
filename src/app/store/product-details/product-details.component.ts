import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { ProductService } from "src/app/services/product.service";
import { StateService } from "src/app/services/state.service";
import { Product } from "src/app/models/product.model";
import { Cart } from "src/app/models/cart.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
           
  constructor(private state: StateService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private cart: Cart) { 
      
    }

    product: Product = new Product();

    ngOnInit() {
      this.route.params.subscribe(params => this.loadProduct(params["productId"]));            
    }

    loadProduct(strProductId: string){
      if(Number(strProductId)){
        this.product = this.productService.getProductById(parseInt(strProductId));                  
      }      
    }

    addToCart(){
        console.log(this.product);
        this.cart.addLine(this.product);
        this.router.navigate(["product-list"]);
    }

    returnToProducts(){     
      this.router.navigate(["product-list"]);
    }
}
