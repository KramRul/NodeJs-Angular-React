import { AddProductToCardShopClientRequestView } from '../entities/shop-client.views/requests/add-product-to-card-shop-client.request.view';
import { DeleteProductFromCardShopClientRequestView } from '../entities/shop-client.views/requests/delete-product-from-card-shop-client.request.view';
import HttpHelper from '../helpers/http.helper';
import Api from '../helpers/api.helper';

export class ShopClientService {
    private url: string;
    private http: HttpHelper;
    private api: Api;
    constructor() {
        this.http = new HttpHelper();
        this.api = new Api();
        this.url = `${this.api.Base_URL}api`;
    }

    getAllProducts(): Promise<any> {
        return this.http.get<any>(`${this.url}/getAllProducts`);
    }

    getProductsByCategory(categoryId: string): Promise<any> {
        return this.http.get<any>(`${this.url}/getProductsByCategory?categoryId=${categoryId}`);
    }

    findProducts(searchQuery: string): Promise<any> {
        return this.http.get<any>(`${this.url}/findProducts?searchQuery=${searchQuery}`);
    }

    addProductToCard(model: AddProductToCardShopClientRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/addProductToCard`, model);
    }

    getProductsInCard(userId: string): Promise<any> {
        return this.http.get<any>(`${this.url}/getProductsInCard?userId=${userId}`);
    }

    deleteProductFromCard(model: DeleteProductFromCardShopClientRequestView): Promise<any> {
        return this.http.post<any>(`${this.url}/deleteProductFromCard`, model);
    }

    getAllCategories(): Promise<any> {
        return this.http.get<any>(`${this.url}/getAllCategories`);
    }
}