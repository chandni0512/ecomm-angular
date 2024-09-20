import { Component } from '@angular/core';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { signUpData } from '../../data-interface/sellerData';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.scss'
})
export class SellerAuthComponent {
  protected registerEmails:string[] = []
  constructor(private sellerService:SellerService, private router:Router){

  }
  ngOnInit():void{
    this.getSellerEmailIds();
  }

  protected getSellerEmailIds(){
    this.sellerService.getSellerEmailIds().subscribe((res:any)=>{
      this.registerEmails = res.map((a:any) => a.Email);      
    })
  }
protected sellerSingUp(form:NgForm) :void{  
  let val:signUpData = form.value;
  if(val.email && val.name && val.password && val.confirmPassword){
    if(this.registerEmails.includes(val.email)) return;
    if(val.password !== val.confirmPassword) return;
    this.sellerService.singUpSeller(val).subscribe((res:any)=>{
      if(res){
        form.resetForm();
        this.router.navigate(['../seller-login']);  
      }
    })
  }
 }
}
