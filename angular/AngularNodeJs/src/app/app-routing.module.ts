import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'shop-client', pathMatch: 'full' },
  {
    path: '', children:
      [        
        { path: 'shop-client', loadChildren: "./shop-client/shop-client.module#ShopClientModule" },
        { path: 'account', loadChildren: "./account/account.module#AccountModule" },
        { path: 'shop-admin', loadChildren: "./shop-admin/shop-admin.module#ShopAdminModule" },
      ]
  },
  { path: '**', redirectTo: '/404', pathMatch: 'full' }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
