import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopAdminComponent } from './shop-admin.component';
import { AddProductPageComponent } from './pages/add-product-page/add-product-page.component';
import { LoggedGuard } from '../shared/guards/logged.guard';
import { AdminGuard } from '../shared/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  {
    path: '', component: ShopAdminComponent, children: [  
      { path: 'add-product-page', component: AddProductPageComponent, canActivate: [LoggedGuard, AdminGuard] }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAdminRoutingModule { }
