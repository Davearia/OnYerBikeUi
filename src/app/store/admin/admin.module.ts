import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";

import { ProductEditorComponent } from "./product-editor/product-editor/product-editor.component";
import { CategoryEditorComponent } from "./category-editor/category-editor/category-editor.component";
import { SubcategoryEditorComponent } from "./subcategory-editor/subcategory-editor/subcategory-editor.component";
import { OrderListComponent } from "./order-list/order-list/order-list.component";
import { OrderViewComponent } from "./order-view/order-view/order-view.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    // { path: "main", component: AdminComponent },
    // { path: "main", component: AdminComponent, canActivate: [AuthGuard] },    
    { 
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "products/:id", component: ProductEditorComponent },           
            { path: "category-editor", component: CategoryEditorComponent },
            { path: "subcategory-editor", component: SubcategoryEditorComponent },
            { path: "order-list", component: OrderListComponent },
            { path: "order-view", component: OrderViewComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, MaterialFeatures],

    declarations: [AuthComponent, AdminComponent, ProductEditorComponent, CategoryEditorComponent, 
        SubcategoryEditorComponent, OrderListComponent, OrderViewComponent],

    providers: [AuthGuard]
})
export class AdminModule { }