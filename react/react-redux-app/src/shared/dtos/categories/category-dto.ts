export class CategoryDto {
    public _id: string;
    public name: string;
    public description: string;
    public subcategories: Array<CategoryDto> = [];
}