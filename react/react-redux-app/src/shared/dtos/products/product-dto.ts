export class ProductDto {
    public _id: string;
    public name: string;
    public quantity: number;
    public price: number;
    public description: string;
    public categories: Array<string> = [];
}