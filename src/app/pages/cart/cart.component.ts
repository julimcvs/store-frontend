import {Component, inject, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgOptimizedImage} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzDatePickerComponent} from "ng-zorro-antd/date-picker";
import {NzFormControlComponent, NzFormDirective, NzFormItemComponent} from "ng-zorro-antd/form";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzTransitionPatchDirective} from "ng-zorro-antd/core/transition-patch/transition-patch.directive";
import {NzWaveDirective} from "ng-zorro-antd/core/wave";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";
import {PurchaseService} from "../../services/purchase/purchase.service";
import {PermissionService} from "../../services/permission/permission.service";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    SharedModule,
    NgOptimizedImage
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit {
  cart: any = {};
  quotationId: string | null = '';
  loading: boolean = false;

  constructor(
    private router: Router = inject(Router),
    private permissionService: PermissionService = inject(PermissionService),
    private cartService: CartService = inject(CartService),
    private messageService: NzMessageService = inject(NzMessageService),
    private purchaseService: PurchaseService = inject(PurchaseService)
  ) { }

  ngOnInit() {
    this.quotationId = sessionStorage.getItem('quotationId');
    if (this.quotationId) {
      this.cartService.findById(this.quotationId).subscribe({
        next: (res: any) => {
          this.cart = res;
        },
        error: (err) => {
          console.log(err);
          this.messageService.error('Erro ao buscar informações do carrinho.');
        }
      })
    }
  }

  checkout() {
    if (this.quotationId) {
      const body = {
        quotationId: this.quotationId
      }
      if (this.permissionService.getAuthToken()) {
        this.purchaseService.checkout(body).subscribe({
          next: (res: any) => {
            sessionStorage.removeItem('quotationId')
            this.messageService.success('Pedido concluído com sucesso!');
            this.router.navigate(['/home']);
          },
          error: (err) => {
            console.log(err);
            this.messageService.error('Erro ao concluir pedido. Por favor, tente novamente.');
          }
        })
      } else {
        this.router.navigate(['/login']);
      }
    }
  }
}
