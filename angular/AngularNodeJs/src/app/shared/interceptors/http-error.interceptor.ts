import {
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Inject, Injector, Injectable } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(@Inject(Injector) private injector: Injector, private router: Router) {
    }

    private get notifyService(): NotificationService {
        return this.injector.get(NotificationService);
    }

    private get localStorageService(): LocalStorageService {
        return this.injector.get(LocalStorageService);
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error && error.error.Error) {
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.Error}`;
                    } else if (error.error && !error.error.Error && error.error.message) {
                        errorMessage = `Error: ${error.error.message}`;
                    } else if (error.error && !error.error.Error) {
                        errorMessage = `Error: ${error.statusText}`;
                    } else {
                        errorMessage = `Error Code: ${error.status}\nMessage: ${error.statusText}`;
                    }
                    console.error(errorMessage);
                    this.notifyService.showError(errorMessage);
                    if (error.status === 401) {
                        this.localStorageService.clear();
                        this.router.navigate(["/account/access-denied-page"]);
                    }
                    if (error.error) {
                        return throwError(error.error);
                    } else {
                        return throwError(error);
                    }
                })
            )
    }
}
