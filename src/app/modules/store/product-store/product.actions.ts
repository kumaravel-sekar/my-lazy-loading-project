import { Action } from "@ngrx/store";

export enum ActionTypes {
  GET_PRODUCT = "[Products] Get Product Request",
  GET_PRODUCT_FAILURE = "[Products] Get Product Failure",
  GET_PRODUCT_SUCCESS = "[Products] Get Product Success",
}

export class GetProductAction implements Action {
  readonly type = ActionTypes.GET_PRODUCT;
  constructor(public payload: { id: string }) {}
}

export class GetProductFailureAction implements Action {
  readonly type = ActionTypes.GET_PRODUCT_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class GetProductSuccessAction implements Action {
  readonly type = ActionTypes.GET_PRODUCT_SUCCESS;
  constructor(public payload: any) {}
}

export type Actions =
  | GetProductAction
  | GetProductFailureAction
  | GetProductSuccessAction;
