import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {registerLocaleData} from '@angular/common';
import br from '@angular/common/locales/br';
import {en_US, NzI18nService} from 'ng-zorro-antd/i18n';
import {HTTP_INTERCEPTORS} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private i18n: NzI18nService) {
  }

  ngOnInit() {
    this.i18n.setLocale(en_US);
    registerLocaleData(br);
  }
}
