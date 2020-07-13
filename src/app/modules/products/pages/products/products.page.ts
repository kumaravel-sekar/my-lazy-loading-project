import { Component, Input } from "@angular/core";
import { Product } from "@app/modules/product/models/product.model";

@Component({
  selector: "products-page",
  templateUrl: "./products.page.html",
})

// Presentation component that does not make use of services to display products
export class ProductsPage {
  
  // @Input to retrieve the products data from parent Landing Component.
  @Input()
  products: Product[];

  constructor() {}
}
