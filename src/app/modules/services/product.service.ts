import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Product } from "../product/models/product.model";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: string): Observable<Product> {
    const url = "http://localhost:3000/products/" + `${id}`;
    return this.http.get<Product>(url);
  }

  getAllProducts(): Observable<Product[]> {
    const url = "http://localhost:3000/products";
    return this.http.get<Product[]>(url);
  }
}
