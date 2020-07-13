import { Component, OnInit } from "@angular/core";
import { Product } from "@app/modules/product/models/product.model";
import { ProductService } from "@app/modules/services/product.service";

@Component({
  selector: "landing-page",
  templateUrl: "./landing.page.html",
})
export class LandingPage implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    /* to retrieve all the products, 
    to share the data between landing and productspage components */

    this.productService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }
}
