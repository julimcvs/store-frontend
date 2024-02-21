import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient) { }

  checkout(body: any) {
    return this.http.post(`http://localhost:8080/purchase/checkout`, body);
  }
}
