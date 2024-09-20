import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { sellerAuthGuard } from '../guards/seller-auth.guard';
import { ProductsComponent } from './products/products.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';

const routes: Routes = [
  {
    path:'',
    component:ProductsComponent,
  },
  {
    path:'products',
    component:ProductsComponent,
  },
  {
    path:'add-product',
    component:AddProductComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path:'manage-products',
    component:ManageProductsComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path:'edit-products/:id',
    component:AddProductComponent,
    canActivate:[sellerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
