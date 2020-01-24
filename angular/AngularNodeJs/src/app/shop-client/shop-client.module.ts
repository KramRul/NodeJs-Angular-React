import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopClientComponent } from './shop-client.component';
import { SharedModule } from '../shared/shared.module';
import { ListProductsPageComponent } from './pages/ListProductsPage/ListProductsPage.component';
import { ShopClientRoutingModule } from './shop-client-routing.module';
import { ListProductsByCategoryPageComponent } from './pages/list-products-by-category-page/list-products-by-category-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopClientRoutingModule
  ],
  declarations: [ShopClientComponent, ListProductsPageComponent, ListProductsByCategoryPageComponent]
})
export class ShopClientModule { }
