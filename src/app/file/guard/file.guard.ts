import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLoggeIn();
  }

  checkLoggeIn(): boolean {

    var logChecker = localStorage.getItem('islogged');

    if (logChecker === 'true') {
      return true
    }
    this.router.navigate(['/']);
    return false;
  }
}
