import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigatonResolverService {
  public isUserAuthenticated: boolean;
  public userType = 'ADMIN';
  constructor(public router: Router) {}

  public navigationResolver(path: string) {
    this.router.navigate([path]);
  }
}
