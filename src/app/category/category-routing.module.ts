import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { sellerAuthGuard } from '../guards/seller-auth.guard';
import { ManageCategoryComponent } from './manage-category/manage-category.component';

const routes: Routes = [
  {
    path:"",
    component:ManageCategoryComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path:"add-category",
    component:AddCategoryComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path:"add-subCategory",
    component:AddCategoryComponent,
    canActivate:[sellerAuthGuard]
  },
  {
    path:"edit-category/:id",
    component:AddCategoryComponent,
    canActivate:[sellerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
