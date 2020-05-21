import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          return throwError(err);
        }
        if (err.status === 400 && err.error) {
          this.toastr.error(err.error);
          return throwError(err);
        }
        this.toastr.error(err.error.message);
        return throwError(err);
      }));
  }
}
