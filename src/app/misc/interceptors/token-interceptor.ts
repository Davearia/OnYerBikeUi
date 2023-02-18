import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateService } from 'src/app/services/misc/state.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public state: StateService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.state.Token,
      },
    });

    return next.handle(request);
  }
}
