import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginAccountRequestView } from '../entities/account.views/requests/login-account.request.view';
import { RegisterAccountRequestView } from '../entities/account.views/requests/register-account.request.view';

@Injectable()
export class AccountService {
    private url = `${environment.Base_URL}api/account`;

    constructor(private http: HttpClient) {
    }

    login(model: LoginAccountRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/login`, model);
    }

    register(model: RegisterAccountRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/register`, model);
    }
}