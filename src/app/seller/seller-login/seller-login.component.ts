import { Component, EventEmitter, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { signUpData } from '../../data-interface/sellerData';
import { SellerService } from '../../services/seller.service';
import { Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-seller-login',
  templateUrl: './seller-login.component.html',
  styleUrl: './seller-login.component.scss'
})
export class SellerLoginComponent {
  protected registerEmails:any;
  protected authError:string = '';
  constructor(@Inject(DOCUMENT) private document: Document,private sellerService:SellerService, private router:Router,private utils:UtilsService){

  }
  ngOnInit():void{
  }

  protected ifSellerExist(email:string){
    this.sellerService.getSellerEmailIds().subscribe((res:any)=>{
      this.registerEmails = res.find((x:any) => x.Email === email);      
    });
  }
protected sellerLogin(form:NgForm) :void{ 
  this.authError = ''; 
  let val:signUpData = form.value;
  if(val.email && val.password){
    this.ifSellerExist(val.email );
    if(this.registerEmails){
      if(this.registerEmails.Password !== val.password) {
        this.authError = 'Password is Incorrect'
      }else {
        document.defaultView?.localStorage.setItem('logedSeller',JSON.stringify(this.registerEmails));
        form.resetForm();
        this.router.navigate(['seller-home']);   
        this.utils.sellerCheckedIn();
      }
    } else {
      this.authError = 'Email Id is Incorrect'

    }
  }
 }
}
