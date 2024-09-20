import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-dialoge-popup',
  templateUrl: './dialoge-popup.component.html',
  styleUrl: './dialoge-popup.component.scss'
})
export class DialogePopupComponent {
  id:string;
  message: string;
  constructor ( private _mdr: MatDialogRef<DialogePopupComponent>,
    @Inject(MAT_DIALOG_DATA) data: any, private productService:ProductService){
      this.id = data.id;
      this.message = data.message;

  }

  protected deleteProduct(){
    this.productService.deleteProduct(this.id).subscribe((res)=>{
      console.log(res);
      this.CloseDialog();
      
    })
  }
protected CloseDialog(){
  this._mdr.close(false)
}
}
