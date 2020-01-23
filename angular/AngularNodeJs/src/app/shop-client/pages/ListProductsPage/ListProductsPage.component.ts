import { Component, OnInit } from '@angular/core';
import { ShopClientService } from 'src/app/shared/services/shop-client.service';
import { ProductDto } from 'src/app/shared/dtos/products/product-dto';

@Component({
  selector: 'app-ListProductsPage',
  templateUrl: './ListProductsPage.component.html',
  styleUrls: ['./ListProductsPage.component.scss']
})
export class ListProductsPageComponent implements OnInit {
  public responseModel: Array<ProductDto> = [];
  
  constructor(private shopClientService: ShopClientService) { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.responseModel = await this.shopClientService.getAllProducts().toPromise();
  }
}
