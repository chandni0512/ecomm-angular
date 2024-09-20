import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public sellerLoggedIn = new EventEmitter<boolean>(false);
  protected sellerLogedStatus:boolean = false;
  constructor() { }

  sellerCheckedIn(){
    this.sellerLogedStatus = !this.sellerLogedStatus;
    this.sellerLoggedIn.emit(this.sellerLogedStatus);
  }
}
