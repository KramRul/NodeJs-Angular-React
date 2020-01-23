export class CategoryDto {
    public name: string;
    public description: string;
    public subcategories: Array<CategoryDto> = [];
}