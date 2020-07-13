import { Product } from "@app/modules/product/models/product.model";

export interface ProductState {
  isLoading: boolean;
  error: String;
  productInfo: Product;
}

export const initialState: ProductState = {
  isLoading: false,
  error: null,
  productInfo: {
    id: "",
    imageUrl: "",
    brand: "",
    title: "",
    model: "",
    addToCart: "",
  },
};
