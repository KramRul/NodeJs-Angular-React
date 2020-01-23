import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EditProductShopAdminRequestView } from '../entities/shop-admin.views/requests/edit-product-shop-admin.request.view';
import { AddProductShopAdminRequestView } from '../entities/shop-admin.views/requests/add-product-shop-admin.request.view';
import { AddCategoryShopAdminRequestView } from '../entities/shop-admin.views/requests/add-category-shop-admin.request.view';

@Injectable()
export class ShopAdminService {
    private url = `${environment.Base_URL}api/admin`;

    constructor(private http: HttpClient) {
    }

    editProduct(model: EditProductShopAdminRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/editProduct`, model);
    }

    addProduct(model: AddProductShopAdminRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/addProduct`, model);
    }

    addCategory(model: AddCategoryShopAdminRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/addCategory`, model);
    }
}