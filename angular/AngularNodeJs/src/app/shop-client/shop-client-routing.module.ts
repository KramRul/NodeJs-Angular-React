import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsPageComponent } from './pages/ListProductsPage/ListProductsPage.component';
import { ShopClientComponent } from './shop-client.component';
import { ListProductsByCategoryPageComponent } from './pages/list-products-by-category-page/list-products-by-category-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-products-page', pathMatch: 'full' },
  {
    path: '', component: ShopClientComponent, children: [      
      { path: 'list-products-page', component: ListProductsPageComponent },
      { path: 'list-products-by-category-page', component: ListProductsByCategoryPageComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopClientRoutingModule { }