import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class StateService {
    private productSearch: string = "";
    private category?: string = "";
    private subCategory?:string = "";
    private productsPerPage: number = 0;
    private selectedPage: number = 0;

 get ProductSearch() {
    return this.productSearch;
 }

 set ProductSearch(data) {
  this.productSearch = data
 }

 get Category() {
    return this.category;
 }

 set Category(data) {
  this.category = data
 }

 get SubCategory() {
    return this.subCategory;
 }

 set SubCategory(data) {
  this.subCategory = data
 }

 get ProductsPerPage() {
    return this.productsPerPage;
 }

 set ProductsPerPage(data) {
  this.productsPerPage = data
 }

 get SelectedPage() {
    return this.selectedPage;
 }

 set SelectedPage(data) {
  this.selectedPage = data
 }


}