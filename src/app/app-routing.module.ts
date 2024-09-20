import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component : HomeComponent
  },
  {
    path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule) 
  },
  {
    path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) 
  },
  {
    path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
