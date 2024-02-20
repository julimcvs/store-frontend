import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  NzAutocompleteComponent,
  NzAutocompleteModule,
  NzAutocompleteTriggerDirective
} from "ng-zorro-antd/auto-complete";
import {NzInputDirective, NzInputGroupComponent} from "ng-zorro-antd/input";
import {NzIconDirective, NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzColDirective, NzRowDirective} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzContentComponent} from "ng-zorro-antd/layout";
import {IconDefinition} from '@ant-design/icons-angular';
import {MenuOutline, ShoppingCartOutline, UserOutline} from '@ant-design/icons-angular/icons';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzAlertModule} from "ng-zorro-antd/alert";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";

const icons: IconDefinition[] = [MenuOutline, ShoppingCartOutline, UserOutline];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FlexLayoutServerModule,
    FormsModule,
    NzAutocompleteModule,
    NzAutocompleteComponent,
    NzInputDirective,
    NzIconDirective,
    NzInputGroupComponent,
    NzButtonModule,
    NzAutocompleteComponent,
    NzAutocompleteTriggerDirective,
    NzRowDirective,
    NzColDirective,
    NzCardModule,
    NzModalModule,
    NzContentComponent,
    RouterLink,
    RouterLinkActive,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzAlertModule,
    NzTagModule,
    NzDatePickerModule,
    NzIconModule.forRoot(icons),
  ],
  exports: [
    FlexLayoutModule,
    FlexLayoutServerModule,
    FormsModule,
    NzAutocompleteModule,
    NzAutocompleteComponent,
    NzInputDirective,
    NzIconDirective,
    NzInputGroupComponent,
    NzButtonModule,
    NzAutocompleteComponent,
    NzAutocompleteTriggerDirective,
    NzRowDirective,
    NzColDirective,
    NzCardModule,
    NzModalModule,
    NzContentComponent,
    RouterLink,
    RouterLinkActive,
    NzFormModule,
    ReactiveFormsModule,
    NzSelectModule,
    NzAlertModule,
    NzTagModule,
    NzDatePickerModule,
  ]
})
export class SharedModule {
}
