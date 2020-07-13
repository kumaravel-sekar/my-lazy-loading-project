import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import * as ProductAction from "./product.actions";
import { ProductService } from "@app/modules/services/product.service";

@Injectable()
export class ProductEffects {
  constructor(
    private productService: ProductService,
    private actions$: Actions
  ) {}

  @Effect()
  public getProduct$: Observable<Action> = this.actions$.pipe(
    ofType(ProductAction.ActionTypes.GET_PRODUCT),
    mergeMap((action) => this.fetchProduct(action)),
    catchError((error) =>
      of(new ProductAction.GetProductFailureAction({ error }))
    )
  );

  fetchProduct(action) {
    return this.productService
      .getProduct(action.payload.id)
      .pipe(
        map((response) => new ProductAction.GetProductSuccessAction(response))
      );
  }
}
