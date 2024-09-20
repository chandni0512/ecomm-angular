import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerHomeComponent } from './seller-home/seller-home.component';



@NgModule({
  declarations: [
    SellerAuthComponent,
    SellerLoginComponent,
    SellerHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SellerRoutingModule
  ]
})
export class SellerModule { }
