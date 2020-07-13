import { NgModule } from "@angular/core";
import { ProductsPage } from "@products/pages/products/products.page";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "@shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/compiler/src/core";

export const productsRoutes: Routes = [
  {
    path: "",
    component: ProductsPage,
    pathMatch: "full",
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(productsRoutes)],
  declarations: [ProductsPage],
  exports: [ProductsPage],
})
export class ProductsModule {}
