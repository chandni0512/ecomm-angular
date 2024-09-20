import { Component, ViewChild } from '@angular/core';
import { DialogePopupComponent } from '../../page-components/dialoge-popup/dialoge-popup.component';
import { MatPaginator } from '@angular/material/paginator';
import { CategoryService } from '../../services/category.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-category',
  templateUrl: './manage-category.component.html',
  styleUrl: './manage-category.component.scss'
})
export class ManageCategoryComponent {
  displayedColumns: string[] = ['s.no', 'categoryName','type','actions'];
  products : any;
  alertMessage:string;
  dataSource = new MatTableDataSource<any>();
  matDialogRef: MatDialogRef<DialogePopupComponent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private categoryService:CategoryService, private matDialog: MatDialog, private router:Router){
    this.getCategories();    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  protected getCategories(){
    this.categoryService.getCategories().subscribe((res:any)=>{
      console.log(res);
      
      this.dataSource.data = res;
    })
  }

  protected onClickEdit(id:string){    
    this.router.navigate([`category/edit-category/${id}`]);
  }
  
  protected openModal(id:any){
    this.matDialogRef = this.matDialog.open(DialogePopupComponent, {
      data: { message: 'Are you sure you want to delete?',id:id },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe((res:any) => {
      if(!res) return;
     this.alertMessage = 'category deleted successfully!!';
     this.getCategories();
    });
  }

}
