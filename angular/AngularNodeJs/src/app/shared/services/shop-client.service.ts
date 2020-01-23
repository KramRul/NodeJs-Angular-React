import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProductToCardShopClientRequestView } from '../entities/shop-client.views/requests/add-product-to-card-shop-client.request.view';
import { DeleteProductFromCardShopClientRequestView } from '../entities/shop-client.views/requests/delete-product-from-card-shop-client.request.view';

@Injectable()
export class ShopClientService {
    private url = `${environment.Base_URL}api`;

    constructor(private http: HttpClient) {
    }

    getAllProducts(): Observable<any> {
        return this.http.get<any>(`${this.url}/getAllProducts`);
    }

    getProductsByCategory(categoryId: string): Observable<any> {
        return this.http.get<any>(`${this.url}/getProductsByCategory?categoryId=${categoryId}`);
    }

    findProducts(searchQuery: string): Observable<any> {
        return this.http.get<any>(`${this.url}/findProducts?searchQuery=${searchQuery}`);
    }

    addProductToCard(model: AddProductToCardShopClientRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/addProductToCard`, model);
    }

    getProductsInCard(userId: string): Observable<any> {
        return this.http.get<any>(`${this.url}/getProductsInCard?userId=${userId}`);
    }

    deleteProductFromCard(model: DeleteProductFromCardShopClientRequestView): Observable<any> {
        return this.http.post<any>(`${this.url}/deleteProductFromCard`, model);
    }

    getAllCategories(): Observable<any> {
        return this.http.get<any>(`${this.url}/getAllCategories`);
    }
}