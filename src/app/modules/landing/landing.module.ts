import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPage } from "@landing/pages/landing/landing.page";
import { SharedModule } from "@shared/shared.module";
import { ProductsPage } from "../products/pages/products/products.page";
import { ProductsModule } from "../products/products.module";

export const landingRoutes: Routes = [
  {
    path: "",
    component: LandingPage,
  },
  {
    path: "**",
    redirectTo: "",
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(landingRoutes)],
  declarations: [LandingPage, ProductsPage],
  providers: [],
})
export class LandingModule {}
