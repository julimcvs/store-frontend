import {inject, Injectable, OnInit} from '@angular/core';
import {CanActivateFn, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PermissionService implements OnInit {
  private token: string | null = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.token = localStorage.getItem('jwt-token')
  }

  canActivate(): boolean {
    if (this.token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  getAuthToken(): string | null {
    this.token = localStorage.getItem('jwt-token')
    return this.token;
  }

  logout() {
    localStorage.removeItem('jwt-token');
    this.router.navigate(['/login']);
  }
}

export const authGuard: CanActivateFn = (route, state) => {
  return inject(PermissionService).canActivate();
}
