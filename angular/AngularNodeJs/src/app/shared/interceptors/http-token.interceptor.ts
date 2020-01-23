import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenHelper } from '../helpers/token.helper';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
    constructor(private tokenHelper: TokenHelper) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        var token = this.tokenHelper.getToken();
        if (token != "") {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request);
    }
}