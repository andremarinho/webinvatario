
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { ProductCrudComponent } from "./views/product-crud/product-crud.component";



const routes: Routes = [
  {
    path: "",
    component: ProductCrudComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
