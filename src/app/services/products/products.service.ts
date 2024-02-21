import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  findPaginate() {
    return this.http.get(`http://localhost:8080/products?page=1&rowsPerPage=100&sortDirection=ASC&sortField=price`);
  }
}
