import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUpData } from '../data-interface/sellerData';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) {

   }

   public getSellerEmailIds(){
    return this.http.get('http://localhost:3000/seller');
   }

   public singUpSeller(data:signUpData){
    return this.http.post('http://localhost:3000/seller',data);
   }
}
