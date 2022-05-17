import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Own modules & components
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseUrl:string = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  getHeroes():Observable<Heroe[]>
  {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroeById(id:string):Observable<Heroe>
  {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }

  getSugerenciasAutoComplete(termino:string):Observable<Heroe[]>
  {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  agregarHeroe(hero:Heroe):Observable<Heroe>
  {
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`,hero);
  }

  actualizarHeroe(hero:Heroe):Observable<Heroe>
  {
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${hero.id}`,hero);
  }

  eliminarHeroe(id:string):Observable<any>
  {
    return this.http.delete<any>(`${this.baseUrl}/heroes/${id}`);
  }

}
