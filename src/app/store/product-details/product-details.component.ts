import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from "@angular/router";

import { ProductService } from "src/app/services/product.service";
import { StateService } from "src/app/services/state.service";
import { Product } from "src/app/model/product.model";
import { ProductCategory } from "src/app/model/ProductCategory.model";
import { ProductSubCategory } from "src/app/model/productSubcategories.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
           
  constructor(private state: StateService,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { 
      
    }

    product: Product = new Product();

    ngOnInit() {
      this.route.params.subscribe(params => this.loadProduct(params["productId"]));            
    }

    loadProduct(strProductId: string){
      if(Number(strProductId)){
        this.product = this.productService.getProductById(parseInt(strProductId));  
        
        console.log(this.product);
      }      
    }

    returnToProducts(){     
      this.router.navigate(["product-list"]);
    }
}
