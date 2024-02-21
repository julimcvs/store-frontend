import {Routes} from '@angular/router';
import {LoginComponent} from "./login.component";
import {ProfileComponent} from "./profile/profile/profile.component";

export const LOGIN_ROUTES: Routes = [
  {path: '', component: LoginComponent},
  {path: 'profiile', component: ProfileComponent}
];
