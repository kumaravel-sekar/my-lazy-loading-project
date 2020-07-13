import { Actions, ActionTypes } from "./product.actions";
import { initialState, ProductState } from "./product.state";

export function ProductReducer(
  state = initialState,
  action: Actions
): ProductState {
  switch (action.type) {
    case ActionTypes.GET_PRODUCT: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case ActionTypes.GET_PRODUCT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        productInfo: action.payload,
        error: null,
      };
    }
    case ActionTypes.GET_PRODUCT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
