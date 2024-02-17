import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import {FormsModule} from "@angular/forms";
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
  ]
})
export class SharedModule {
}
