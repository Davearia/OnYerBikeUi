import { Injectable } from '@angular/core';
import { first, map, Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { ProductCategory } from 'src/app/models/ProductCategory.model';
import { ProductSubCategory } from 'src/app/models/productSubCategory.model';
import { BaseService } from './base.service';

@Injectable()
export class ProductService extends BaseService {
  public product: Product = new Product();
  public products: Product[] = [];
  public filteredProducts: Product[] = [];
  public categories: ProductCategory[] = [];
  public subCategories: ProductSubCategory[] = [];

  loadProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiRoot + 'Product').pipe(
      map((data) => {
        return data.sort((a, b) => a.name?.localeCompare(b.name));
      })
    );
  }

  loadCategories(): Observable<ProductCategory[]> {
    return this.http
      .get<ProductCategory[]>(this.apiRoot + 'ProductCategory')
      .pipe(
        map((data) => {
          return data.sort((a, b) => a.name?.localeCompare(b.name));
        })
      );
  }

  loadSubCategories(): Observable<ProductSubCategory[]> {
    return this.http
      .get<ProductSubCategory[]>(this.apiRoot + 'ProductSubCategory')
      .pipe(
        map((data) => {
          return data.sort((a, b) => a.name?.localeCompare(b.name));
        })
      );
  }

  getProducts(category?: string, subCategory?: string): Product[] {
    if (category != null && category != 'All' && this.subCategories != null) {
      var categoryId = this.categories.find(
        (c) => c.name == category
      )?.productCategoryId;
      if (categoryId != null) {
        var subCategories = this.subCategories
          .filter((sc) => sc.productCategoryId == categoryId)
          .map((sc) => sc.productSubCategoryId);
        this.filteredProducts = this.products
          .filter((p) => subCategories.includes(p.productSubcategoryId))
          .sort();

        return this.filteredProducts;
      }
    }

    if (
      subCategory != null &&
      subCategory != 'All' &&
      this.subCategories != null
    ) {
      var subCategoryId = this.subCategories.find(
        (c) => c.name == subCategory
      )?.productSubCategoryId;
      this.filteredProducts = this.products.filter(
        (p) => p.productSubcategoryId == subCategoryId
      );

      return this.filteredProducts;
    }

    this.filteredProducts = this.products;

    return this.filteredProducts;
  }

  getProductsByName(productSearch?: string): Product[] {
    if (productSearch != null) {
      this.filteredProducts = this.products.filter((p) =>
        p.name?.toLowerCase().includes(productSearch.toLowerCase())
      );

      return this.filteredProducts;
    }

    return this.products;
  }

  getProductById(productId: number): Product {
    var emptyProduct = new Product();
    var product = this.products.find((p) => p.productId == productId);

    if (product != null) {
      return product;
    }

    return emptyProduct;
  }

  updateProduct(product: Product): Observable<void> {
    return this.http
      .put<Product>(this.apiRoot + 'product/' + product.productId, product)
      .pipe(
        map((data) => {
          this.product = data;
          return;
        })
      );
  }

  createProduct(product: Product): Observable<void> {
    return this.http.post<Product>(this.apiRoot + 'product', product).pipe(
      map((data) => {
        this.product = data;
        return;
      })
    );
  }
}
