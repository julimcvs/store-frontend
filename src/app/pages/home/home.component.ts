import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {NzAutocompleteComponent, NzAutocompleteTriggerDirective} from "ng-zorro-antd/auto-complete";
import {NzInputDirective} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../services/products.service";
import {NgOptimizedImage} from "@angular/common";
import {routes} from "../../app.routes";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    ReactiveFormsModule,
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  searchProduct: string = '';
  products: any[] = [];
  selectedProduct: any;
  dialogProduct: boolean = false;
  loading: boolean = false;
  protected readonly routes = routes;

  constructor(private productService: ProductsService = inject(ProductsService)) {
  }

  ngOnInit() {
    this.productService.findPaginate().subscribe((res: any) => {
      this.products = res.content;
    })
  }

  addToChart() {
    this.selectedProduct = null;
    this.dialogProduct = false;
  }

  detailProduct(product: any) {
    this.selectedProduct = product;
    this.dialogProduct = true;
  }

  searchProducts() {
    this.productService.findPaginate();
  }
}
