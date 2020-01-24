import { Component, OnInit } from '@angular/core';
import { ShopClientService } from 'src/app/shared/services/shop-client.service';
import { CategoryDto } from 'src/app/shared/dtos/categories/category-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {
  public responseModel: Array<CategoryDto> = [];

  constructor(private shopClientService: ShopClientService, private router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.responseModel = await this.shopClientService.getAllCategories().toPromise();
  }

  goToProductsByCategoryPage(category: CategoryDto){
    this.router.navigate(["/shop-client/list-products-by-category-page"], {
      queryParams: { categoryId: category._id, categoryName: category.name}
    });
  }
}
