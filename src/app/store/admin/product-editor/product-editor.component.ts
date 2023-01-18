import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/model/product.model";
import { ProductCategory } from "src/app/model/ProductCategory.model";
import { ProductSubCategory } from "src/app/model/productSubCategory.model";
import { StateService } from "src/app/services/state.service";

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css']
})
export class ProductEditorComponent implements OnInit {

  constructor(private productService: ProductService, 
    private state: StateService,
    private router: Router)
    {}

    filteredProducts: Product[] = [];
    selectedCategory: string | undefined = 'All';
    selectedSubCategory: string | undefined = 'All';   
    productSearch: string = ''; 
    productId: number | undefined = 0; 
    errorMessage?: string;
    product: Product = new Product; 

    productsPerPage = 8;
    selectedPage = 1;

    ngOnInit(): void {
      this.productService.loadSubCategories()
      .subscribe();

      this.productService.loadCategories()
      .subscribe();

      this.productService.loadProducts()
      .subscribe();
                     
  }    

  get products(): Product[] {       
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage
               
    if(this.productSearch.length > 0){
        this.filteredProducts =  this.productService.getProductsByName(this.productSearch);
        return this.filteredProducts.slice(pageIndex, pageIndex + this.productsPerPage);
    }
                   
    return this.productService.getProducts(this.selectedCategory, this.selectedSubCategory)       
        .slice(pageIndex, pageIndex + this.productsPerPage);
        
    }

  get categories(): ProductCategory[]{
      return this.productService.productCategories;
  }

  get subCategories(): ProductSubCategory[]{
      return this.productService.productSubCategories;
  }

  changePage(newPage: number) {
      this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
      this.productsPerPage = Number(newSize);
      this.changePage(1);
  }

  changeCategory(newCategory?: string) {       
      this.selectedSubCategory = "All";      
      this.selectedCategory = newCategory;
  }

  changeSubCategory(newSubCategory?: string) {
      this.selectedCategory = "All";
      this.selectedSubCategory = newSubCategory;
  }

  handleInputEvent(ev: Event){
      if(ev.target instanceof HTMLInputElement){  
          this.filteredProducts.length = 0;  
          this.selectedCategory = "All";
          this.selectedSubCategory = "All";    
          this.productSearch = ev.target.value;     
          this.filteredProducts =  this.productService.getProductsByName(this.productSearch);           
      }
  }

  editProduct(productId?: number){  
    if (productId != null){
      this.product = this.productService.getProductById(productId);
      this.productId = productId;
    }  
  }

  closeEditor(){
      this.productId = 0;
  }

  save() {
    //this.repository.saveProduct(this.product);
    //this.router.navigateByUrl("/admin/main/products");
    this.closeEditor();    
}
  
  get pageCount(): number {       
      return Math.ceil(this.productService.filteredProducts.length / this.productsPerPage);
  }  

}
