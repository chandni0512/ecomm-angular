import { Component, Inject } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  protected IfSellerLoggedIn:boolean = false;
  protected sellerDetails:any;
  constructor(@Inject(DOCUMENT) private document: Document,private utilService:UtilsService,private router:Router){

  }

  protected ngOnInit(){
    this.utilService.sellerLoggedIn.subscribe(()=>{
      this.getSellerDetails();
    });
    this.getSellerDetails();
  }

  protected getSellerDetails(){
    this.IfSellerLoggedIn = !!document.defaultView?.localStorage.getItem('logedSeller');
    this.sellerDetails = document.defaultView?.localStorage.getItem('logedSeller');
    this.sellerDetails = JSON.parse(this.sellerDetails);

  }

  protected logout(){
    document.defaultView?.localStorage.removeItem('logedSeller');
    this.router.navigate(['']);
    this.utilService.sellerCheckedIn();
  }

  protected search(formData:NgForm){
    console.log(formData);
  }
}
