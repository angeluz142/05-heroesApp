import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        with:100%;
        border-radius:5px;
      }
    `
    ]
})
export class HeroeComponent implements OnInit {

  heroe!:Heroe;

  constructor(
              private activatedRoute:ActivatedRoute, 
              private heroesServices:HeroeService,
              private router:Router
            ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({id}) => this.heroesServices.getHeroeById(id) )
      )
      .subscribe( hero => this.heroe = hero); 
  }

  regresar(){
    this.router.navigate(['/heroes/listado']);
  }


}
