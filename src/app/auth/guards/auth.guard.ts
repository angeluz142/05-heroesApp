import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})


export class AuthGuard implements CanLoad {

  constructor(private _authSrv:AuthService){}

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  // }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      // console.log('CANLOAD',false);
      // console.log('ROUTES',route);
      // console.log('SEGMENTS',segments);

      if(this._authSrv.auth.id){
        return true;
      }
      
      console.log('Bloqueado por guard');
      
    return false;
  }
}
