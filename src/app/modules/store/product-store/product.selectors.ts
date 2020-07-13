import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";
import { PRODUCT_STORE } from "./product.constants";

export const productDetailState = createFeatureSelector<ProductState>(
  PRODUCT_STORE
);

export const getProductDetails = createSelector(
  productDetailState,
  (state: ProductState) => {
    if (!state.isLoading) {
      return state.productInfo;
    }
  }
);
