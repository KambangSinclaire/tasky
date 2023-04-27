import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // Write our logic to check if user can access this route
    // This logic should always return a boolean

    // This is where you can check if a user is logged in
    // then return true or return false if they aren't logged in

    let hasAccess = false;

    if (hasAccess) {
      return hasAccess;
    }

    alert('Opppps... you dont access to this resouce !! Sorry Mann');

    return hasAccess;
  }

}
