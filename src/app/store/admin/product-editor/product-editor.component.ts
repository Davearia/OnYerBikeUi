import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Product } from 'src/app/models/product.model';
import { ProductCategory } from 'src/app/models/ProductCategory.model';
import { ProductSubCategory } from 'src/app/models/productSubCategory.model';
import { BaseUiComponentComponent } from '../../base-ui-component/base-ui-component.component';

@Component({
  selector: 'app-product-editor',
  templateUrl: './product-editor.component.html',
  styleUrls: ['./product-editor.component.css'],
})
export class ProductEditorComponent
  extends BaseUiComponentComponent
  implements OnInit
{
  filteredSubCategories: ProductSubCategory[] = [];
  selectedCategory: string | undefined = 'All';
  selectedProductCategory: string | undefined;
  selectedSubCategory: string | undefined = 'All';
  selectedProductSubCategory: string | undefined;
  productSearch: string = '';
  productId: number | undefined = 0;
  errorMessage?: string;
  product: Product = new Product();
  isEditing: boolean = false;
  submitted: boolean = false;

  productsPerPage = 8;
  selectedPage = 1;

  override ngOnInit(): void {
    this.productService.loadProducts().subscribe((response) => {
      this.productService.products = response;
    });

    this.productService.loadCategories().subscribe((response) => {
      this.productService.categories = response;
    });

    this.productService.loadSubCategories().subscribe((response) => {
      this.productService.subCategories = response;
    });
  }

  get getProducts(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productsPerPage;

    if (this.productSearch.length > 0) {
      this.productService.filteredProducts =
        this.productService.getProductsByName(this.productSearch);
      return this.productService.filteredProducts.slice(
        pageIndex,
        pageIndex + this.productsPerPage
      );
    }

    return this.productService
      .getProducts(this.selectedCategory, this.selectedSubCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  get categories(): ProductCategory[] {
    return this.productService.categories;
  }

  get subCategories(): ProductSubCategory[] {
    return this.productService.subCategories;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  changeCategory(newCategory?: string) {
    this.selectedSubCategory = 'All';
    this.selectedCategory = newCategory;
  }

  changeSubCategory(newSubCategory?: string) {
    this.selectedCategory = 'All';
    this.selectedSubCategory = newSubCategory;
  }

  handleInputEvent(ev: Event) {
    if (ev.target instanceof HTMLInputElement) {
      this.selectedCategory = 'All';
      this.selectedSubCategory = 'All';
      this.productSearch = ev.target.value;
      this.productService.filteredProducts =
        this.productService.getProductsByName(this.productSearch);
    }
  }

  editProduct(productId?: number) {
    if (productId != null) {
      this.isEditing = true;

      this.product = this.productService.getProductById(productId);
      this.productId = productId;

      var categoryId = this.subCategories.find(
        (c) => c.productSubCategoryId == this.product.productSubcategoryId
      )?.productCategoryId;
      this.selectedProductCategory = this.categories.find(
        (c) => c.productCategoryId == categoryId
      )?.name;

      this.filteredSubCategories = this.subCategories.filter(
        (c) => c.productCategoryId == categoryId
      );
      this.selectedProductSubCategory = this.subCategories.find(
        (c) => c.productSubCategoryId == this.product.productSubcategoryId
      )?.name;
    }
  }

  newProduct() {
    this.product = new Product();
    this.productId = 0;
    this.isEditing = true;
  }

  changeSelectedProductCategories(newCategory?: string) {
    var categoryId = this.categories.find(
      (c) => c.name == newCategory
    )?.productCategoryId;
    this.filteredSubCategories = this.subCategories.filter(
      (c) => c.productCategoryId == categoryId
    );
    this.selectedProductSubCategory = this.filteredSubCategories[0].name;
  }

  closeEditor() {
    this.isEditing = false;
    this.productId = 0;
  }

  save(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      this.product.productSubcategoryId = this.subCategories.find(
        (c) => c.name == this.selectedProductSubCategory
      )?.productSubCategoryId;

      if (this.isEditing && this.productId != null && this.productId > 0) {
        this.productService.updateProduct(this.product).subscribe((order) => {
          this.submitted = false;
        });
      } else {
        this.productService.createProduct(this.product).subscribe((order) => {
          this.submitted = false;
        });
      }
    }
  }

  get pageCount(): number {
    return Math.ceil(
      this.productService.filteredProducts.length / this.productsPerPage
    );
  }
}
