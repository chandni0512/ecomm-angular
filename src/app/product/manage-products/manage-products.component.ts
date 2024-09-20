import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { productsData } from '../../data-interface/sellerData';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DialogePopupComponent } from '../../page-components/dialoge-popup/dialoge-popup.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent implements AfterViewInit {
  displayedColumns: string[] = ['s.no', 'name', 'imageURL', 'category', 'price','actions'];
  products : any;
  alertMessage:string;
  dataSource = new MatTableDataSource<any>();
  matDialogRef: MatDialogRef<DialogePopupComponent>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private productService:ProductService, private matDialog: MatDialog, private router:Router){
    this.getProducts();    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  protected getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.dataSource.data = res;
    })
  }

  protected onClickEdit(id:string){    
    this.router.navigate([`product/edit-products/${id}`]);
  }
  
  protected openModal(id:any){
    this.matDialogRef = this.matDialog.open(DialogePopupComponent, {
      data: { message: 'Are you sure you want to delete?',id:id },
      disableClose: true
    });

    this.matDialogRef.afterClosed().subscribe(res => {
      if(!res) return;
     this.alertMessage = 'product deleted successfully!!';
     this.getProducts();
    });
  }

  protected currencyFormatter(price:number){
    // Format the price above to USD using the locale, style, and currency.
    let formatter = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    });
  
    return formatter.format(price);
  }
}
