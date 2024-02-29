import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})

export class AuthGuard implements CanActivate {
  constructor (private router: Router) {
    console.log('auth guard');
  }
  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate([ '/login' ]);
      return true;
    } else {
      return false;
    }
  }
}
