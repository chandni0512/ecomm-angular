import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ManageCategoryComponent } from './manage-category/manage-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AddCategoryComponent,
    ManageCategoryComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,

  ]
})
export class CategoryModule { }
