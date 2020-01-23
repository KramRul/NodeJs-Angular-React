import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListProductsPageComponent } from './pages/ListProductsPage/ListProductsPage.component';
import { ShopClientComponent } from './shop-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-products-page', pathMatch: 'full' },
  {
    path: '', component: ShopClientComponent, children: [      
      { path: 'list-products-page', component: ListProductsPageComponent }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopClientRoutingModule { }