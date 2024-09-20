import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { productsData } from '../../data-interface/sellerData';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  protected products:any;
  constructor(private productService:ProductService){
    this.currencyFormatter(123434);
  }
  protected ngOnInit(){
    this.getProducts()
  }

  protected getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      console.log(res);
      this.products = res;
    })
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
