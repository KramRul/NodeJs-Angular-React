import { EditProductShopAdminRequestView } from '../entities/shop-admin.views/requests/edit-product-shop-admin.request.view';
import { AddProductShopAdminRequestView } from '../entities/shop-admin.views/requests/add-product-shop-admin.request.view';
import { AddCategoryShopAdminRequestView } from '../entities/shop-admin.views/requests/add-category-shop-admin.request.view';
import HttpHelper from '../helpers/http.helper';
import Api from '../helpers/api.helper';

export class ShopAdminService {
    private url: string;
    private http: HttpHelper;
    private api: Api;
    constructor() {
        this.http = new HttpHelper();
        this.api = new Api();
        this.url = `${this.api.Base_URL}api/admin`;
    }

    editProduct(model: EditProductShopAdminRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/editProduct`, model);
    }

    addProduct(model: AddProductShopAdminRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/addProduct`, model);
    }

    addCategory(model: AddCategoryShopAdminRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/addCategory`, model);
    }
}