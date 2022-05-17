import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

// Own modules & components
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})



export class ListadoComponent implements OnInit {

  heroes:Heroe[] = [];
  

  constructor(private heroesService:HeroeService) { }

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe(resp =>{
        this.heroes = resp;
      });
      
  }

}
