import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopAdminComponent } from './shop-admin.component';
import { SharedModule } from '../shared/shared.module';
import { ShopAdminRoutingModule } from './shop-admin-routing.module';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopAdminRoutingModule
  ],
  declarations: [ShopAdminComponent, AddProductPageComponent]
})
export class ShopAdminModule { }
