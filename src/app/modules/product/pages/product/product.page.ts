import { Component, OnInit } from "@angular/core";
import { Product } from "../../models/product.model";
import { ActivatedRoute } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { GetProductAction } from "@app/modules/store/product-store/product.actions";
import * as ProductSelector from "../../../store/product-store/product.selectors";
import { Observable } from "rxjs";
import { tap, filter } from "rxjs/operators";
import { PRODUCTS_IMAGE_PATH } from "../../../store/product-store/product.constants";

@Component({
  selector: "product-page",
  templateUrl: "product.page.html",
})
export class ProductPage implements OnInit {
  product: Product;
  imagePath: string;

  // observable variable
  product$: Observable<Product>;

  constructor(private route: ActivatedRoute, private store: Store<Product>) {}

  ngOnInit() {
    this.imagePath = PRODUCTS_IMAGE_PATH;
    //Calling method
    this.getProduct();
  }

  // This method is used to get the product details through ngrx effects
  getProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    
	// Retrieve product from state through obsevables
    this.product$ = this.store.select(ProductSelector.getProductDetails).pipe(
      tap((product) => {
        if (product && product.id !== id) {
          // To dispatch get product action conditionally in a tap if the product doesn't exist in state.
          this.store.dispatch(new GetProductAction({ id: id }));
        }
      }),
      filter((product) => product !== null)
    );
  }
}
