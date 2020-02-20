import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
      const isAuth = this.authService.getIsAuth();
      if (!isAuth) {
        this.router.navigate(['auth/login'], {relativeTo: this.route});
      }
      return isAuth;
  }
}
