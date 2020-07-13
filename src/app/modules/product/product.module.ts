import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductPage } from "@product/pages/product/product.page";
import { SharedModule } from "@shared/shared.module";
import { PRODUCT_STORE } from "../store/product-store/product.constants";
import { ProductEffects } from "../store/product-store/product.effects";
import { ProductReducer } from "../store/product-store/product.reducer";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

export const productRoutes: Routes = [
  {
    path: ":id",
    component: ProductPage,
  },
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(productRoutes),
    StoreModule.forFeature(PRODUCT_STORE, ProductReducer),
    StoreModule.forRoot({ todos: ProductReducer }),
    EffectsModule.forRoot([ProductEffects]),
  ],
  declarations: [ProductPage],
})
export class ProductModule {}
