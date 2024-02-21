import {Component, inject, OnInit} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {NzAutocompleteComponent, NzAutocompleteTriggerDirective} from "ng-zorro-antd/auto-complete";
import {NzInputDirective} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductsService} from "../../services/products/products.service";
import {NgOptimizedImage} from "@angular/common";
import {routes} from "../../app.routes";
import {CartService} from "../../services/cart/cart.service";
import {NzMessageService} from "ng-zorro-antd/message";

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

  constructor(
    private productService: ProductsService = inject(ProductsService),
    private cartService: CartService = inject(CartService),
    private messageService: NzMessageService = inject(NzMessageService),
  ) {
  }

  ngOnInit() {
    this.productService.findPaginate().subscribe((res: any) => {
      this.products = res.content;
    })
  }

  addToChart() {
    this.loading = true;
    const quotationId = sessionStorage.getItem('quotationId');
    const body = {
      id: quotationId,
      product: this.selectedProduct
    }
    this.cartService.addItem(body).subscribe(
      {
        next: (res: any) => {
          sessionStorage.setItem('quotationId', res.id);
          this.messageService.success('Produto adicionado ao carrinho!');
          this.selectedProduct.quantity = null;
        },
        error: err => {
          console.error(err)
          this.messageService.error('Erro ao adicionar produto ao carrinho.');
        }
      }
    )
    this.loading = false;
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
