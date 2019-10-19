import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private autheService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to api url
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (this.autheService.isAuthenticated() && isApiUrl) {
            request = request.clone({
                setHeaders: {
                    'x-auth-token': this.autheService.getToken()
                }
            });
        }

        return next.handle(request);
    }
}
