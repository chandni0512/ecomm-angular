import { CanActivateFn } from '@angular/router';

export const sellerAuthGuard: CanActivateFn = (route, state) => {
  let ifSeller = localStorage.getItem('logedSeller');
  return !!ifSeller;
};
