import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first, map, Observable } from "rxjs";
import { Product } from "../model/product.model";
import { ProductCategory } from "../model/ProductCategory.model";
import { ProductSubCategory } from "../model/productSubCategory.model";
import { AppConfig } from 'src/config/app-config';

@Injectable()
export class ProductService {

	constructor(private http: HttpClient,
		private appConfig: AppConfig) { 
			this.apiRoot = appConfig.webApiRoot
		}

	public products: Product[] = [];
	public filteredProducts: Product[] = [];	
	public productCategories: ProductCategory[] = [];
	public productSubCategories: ProductSubCategory[] = [];

	apiRoot: string | undefined;

	loadProducts(): Observable<void> {
		return this.http.get<Product[]>(this.apiRoot + "Product")
			.pipe(map(data => {
				this.products = data.sort((a, b) => a.name?.localeCompare(b.name));
				return
			}));
	}
	
	loadCategories(): Observable<void> {
		return this.http.get<ProductCategory[]>(this.apiRoot + "ProductCategory")
			.pipe(map(data => {
				this.productCategories = data.sort((a, b) => a.name?.localeCompare(b.name));
				return
			}));
	}

	loadSubCategories(): Observable<void> {
		return this.http.get<ProductSubCategory[]>(this.apiRoot + "ProductSubCategory")
			.pipe(map(data => {
				this.productSubCategories = data.sort((a, b) => a.name?.localeCompare(b.name));
				return
			}));
	}

	getProducts(category?: string, subCategory?: string): Product[] {		
		if(category != null && category != 'All' && this.productSubCategories != null){			
			var categoryId = this.productCategories.find(c => c.name == category)?.productCategoryId;			
			if(categoryId != null){
				var subCategories = this.productSubCategories.filter(sc => sc.productCategoryId == categoryId).map(sc => sc.productSubCategoryId);																					
				this.filteredProducts = this.products.filter(p => subCategories.includes(p.productSubcategoryId)).sort();
				
				return this.filteredProducts;
			}
		}

		if(subCategory != null && subCategory != 'All' && this.productSubCategories != null){				
			var subCategoryId = this.productSubCategories.find(c => c.name == subCategory)?.productSubCategoryId;						
			this.filteredProducts = this.products.filter(p => p.productSubcategoryId == subCategoryId);
						
			return this.filteredProducts;
		}
		
		this.filteredProducts = this.products;
		
        return this.filteredProducts;
    }

	getProductsByName(productSearch?: string): Product[] {							
		if(productSearch != null){			
			this.filteredProducts = this.products.filter(p => p.name?.toLowerCase().includes(productSearch.toLowerCase()));
			
			return this.filteredProducts;
		}
						
        return this.filteredProducts;
    }

	getProductById(productId: number): Product {	
		var emptyProduct = new Product;													
		var product = this.products.find(p => p.productId == productId);
		
		if(product != null){
			return product;
		}

		return emptyProduct;
	}	
		
}
	
