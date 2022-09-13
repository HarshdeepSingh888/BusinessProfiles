import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

@Injectable({ providedIn: 'root' })
export class ActivationService implements CanActivate {
  constructor(private _router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    //check if user is authenticated
    if (localStorage.getItem('isLoggedIn') === 'true') {
      return true
    }
    return false
  }
}
