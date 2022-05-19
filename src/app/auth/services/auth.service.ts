import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, tap } from 'rxjs';

import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _baseUrl:string = environment.apiBaseUrl;
  private _usuario:Usuario | undefined;

  get auth():Usuario{
    return {...this._usuario!};
  }


  constructor(private httpCli:HttpClient) { }

  login():Observable<Usuario>{
    return this.httpCli.get<Usuario>(`${this._baseUrl}/usuarios/1`)
      .pipe(
        tap( user => this._usuario = user)
      );
  }

}
