import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { NavigatonResolverService } from './navigaton-resolver.service';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  constructor(private navigation: NavigatonResolverService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.navigation.isUserAuthenticated) {
      return true;
    } else {
        this.navigation.navigationResolver('login');
    }
  }
}
