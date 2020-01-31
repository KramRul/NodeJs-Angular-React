import { CategoryDto } from "../../../dtos/categories/category-dto";

export class AddCategoryShopAdminRequestView {
    public name: string = '';
    public description: string = '';
    public subcategories: Array<CategoryDto> = [];
}