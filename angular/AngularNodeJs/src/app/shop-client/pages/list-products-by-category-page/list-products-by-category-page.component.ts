import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDto } from 'src/app/shared/dtos/products/product-dto';
import { ShopClientService } from 'src/app/shared/services/shop-client.service';

@Component({
  selector: 'app-list-products-by-category-page',
  templateUrl: './list-products-by-category-page.component.html',
  styleUrls: ['./list-products-by-category-page.component.scss']
})
export class ListProductsByCategoryPageComponent implements OnInit {
  public categoryId: string;
  public categoryName: string;
  public responseModel: Array<ProductDto> = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopClientService: ShopClientService) { 
    this.categoryId = this.route.snapshot.queryParamMap.get('categoryId');
    this.categoryName = this.route.snapshot.queryParamMap.get('categoryName');
  }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.responseModel = await this.shopClientService.getProductsByCategory(this.categoryId).toPromise();
  }
}
