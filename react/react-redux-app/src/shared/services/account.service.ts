import HttpHelper from "../helpers/http.helper";
import { LoginAccountRequestView } from "../entities/account.views/requests/login-account.request.view";
import { RegisterAccountRequestView } from "../entities/account.views/requests/register-account.request.view";
import Api from "../helpers/api.helper";

export class AccountService {
    private url: string;
    private http: HttpHelper;
    private api: Api;
    constructor() {
        this.http = new HttpHelper();
        this.api = new Api();
        this.url = `${this.api.Base_URL}api/account`;
    }

    login(model: LoginAccountRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/login`, model);
    }

    register(model: RegisterAccountRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/register`, model);
    }
}