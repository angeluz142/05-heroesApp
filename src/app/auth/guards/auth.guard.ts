import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanLoad, CanActivate {
  constructor(private _authSrv: AuthService,private _router:Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    
    //             if (this._authSrv.auth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por guard - CanActivate');

    // return false;


    return this._authSrv.checkAuth()
      .pipe(
        tap(authenticated => {
          if(!authenticated){
            this._router.navigate(['./auth/login']);
          }
        })
      );

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    // console.log('CANLOAD',false);
    // console.log('ROUTES',route);
    // console.log('SEGMENTS',segments);

    return this._authSrv.checkAuth() 
    .pipe(
      tap(authenticated => {
        if(!authenticated){
          this._router.navigate(['./auth/login']);
        }
      })
    );

    // if (this._authSrv.auth.id) {
    //   return true;
    // }

    // console.log('Bloqueado por guard - CanLoad');

    // return false;
  }
}
