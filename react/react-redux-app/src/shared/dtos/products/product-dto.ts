export class ProductDto {
    public _id: string = '';
    public name: string = '';
    public quantity: number = 0;
    public price: number = 0;
    public description: string = '';
    public categories: Array<string> = [];
}