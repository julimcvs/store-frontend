import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  addItem(body: any) {
    return this.http.post(`http://localhost:8080/quotation/add`, body);
  }
}
