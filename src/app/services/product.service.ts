import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productData, productsData } from '../data-interface/sellerData';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  addProduct(data:any){
    return this.http.post('http://localhost:3000/products',data)
  }

  getProducts(id:string = ''){
    return this.http.get(`http://localhost:3000/products/${id}`);
  }

  deleteProduct(id:string){
    return this.http.delete(`http://localhost:3000/products/${id}`)
  }
}
