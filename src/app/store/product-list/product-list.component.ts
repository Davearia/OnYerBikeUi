import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { ProductService } from "src/app/services/product.service";
import { Product } from "src/app/models/product.model";
import { ProductCategory } from "src/app/models/ProductCategory.model";
import { ProductSubCategory } from "src/app/models/productSubCategory.model";
import { StateService } from "src/app/services/state.service";
import { Cart } from "src/app/models/cart.model";
import { StoreComponent } from "../store/store.component";

@Component({
    selector:'products',
    templateUrl:'product-list.component.html',
    styleUrls:['product-list.component.css']
})
export class ProductsComponent implements OnInit
{

    constructor(private productService: ProductService, 
        private router: Router,
        private state: StateService,
        private cart: Cart,
        public store: StoreComponent)
        {}
   
    filteredProducts: Product[] = [];
    selectedCategory: string | undefined = 'All';
    selectedSubCategory: string | undefined = 'All';   
    productSearch: string = '';   

    productsPerPage = 5;
    selectedPage = 1;

    ngOnInit(): void {
        this.productService.loadSubCategories()
        .subscribe();

        this.productService.loadCategories()
        .subscribe();

        this.productService.loadProducts()
        .subscribe();
                       
    }    

    ngAfterViewChecked():void{
        
    }

    get products(): Product[] {       
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage

        if(this.state != null){
            this.getFromState();
        }
               
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

    productDetails(productId?: number){   
        this.addToState();          
        
        this.router.navigate(["product-details", productId]);
    }

    addToCart(product: Product){
        this.cart.addLine(product);
    }

    addToState(){
        this.state.ProductSearch = this.productSearch;
        this.state.Category = this.selectedCategory;
        this.state.SubCategory = this.selectedSubCategory;
        this.state.SelectedPage = this.selectedPage;
        this.state.ProductsPerPage = this.productsPerPage;
    }

    getFromState(){
        if(this.state.ProductSearch && this.state.ProductSearch?.length > 0){
            this.productSearch = this.state.ProductSearch;
            this.state.ProductSearch = "";
        }

        if(this.state.ProductsPerPage && this.state.ProductsPerPage > 0){
            this.productsPerPage = this.state.ProductsPerPage;
            this.state.ProductsPerPage = 0;
        }

        if(this.state.SelectedPage && this.state.SelectedPage > 0){
            this.selectedPage = this.state.SelectedPage;
            this.state.SelectedPage = 0;
        }

        if(this.state.Category && this.state.Category.length > 0){
            this.selectedCategory = this.state.Category;
            this.state.Category = "";
        }

        if(this.state.SubCategory && this.state.SubCategory.length > 0){
            this.selectedSubCategory = this.state.SubCategory;
            this.state.SubCategory = "";
        }
    }

    get pageCount(): number {       
        return Math.ceil(this.productService.filteredProducts.length / this.productsPerPage);
    }         

}
