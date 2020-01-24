import { Component, OnInit } from '@angular/core';
import { ShopClientService } from 'src/app/shared/services/shop-client.service';
import { CategoryDto } from 'src/app/shared/dtos/categories/category-dto';

@Component({
  selector: 'app-sidebar-component',
  templateUrl: './sidebar-component.component.html',
  styleUrls: ['./sidebar-component.component.scss']
})
export class SidebarComponentComponent implements OnInit {
  public responseModel: Array<CategoryDto> = [];
  constructor(private shopClientService: ShopClientService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData(){
    this.responseModel = await this.shopClientService.getAllCategories().toPromise();
  }
}
