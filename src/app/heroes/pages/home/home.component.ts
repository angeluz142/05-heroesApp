import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `
      .container{
        margin:10px;
      }
    `
  ]
})
export class HomeComponent implements OnInit {

  get auth(){
    return this._auhService.auth;
  }

  constructor(private router:Router,private _auhService:AuthService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigate(['./auth']);
  }

}
