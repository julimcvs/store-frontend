import {HttpErrorResponse, HttpEvent, HttpHandlerFn, HttpRequest} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {inject} from "@angular/core";
import {PermissionService} from "../services/permission/permission.service";

export function authInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = inject(PermissionService).getAuthToken();
  if (token) {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next(authReq).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          inject(PermissionService).logout();
        }
        throw err;
      })
    )
  }

  return next(req);

}
