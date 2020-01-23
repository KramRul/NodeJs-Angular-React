import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopAdminComponent } from './shop-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  {
    path: '', component: ShopAdminComponent, children: [      
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopAdminRoutingModule { }
