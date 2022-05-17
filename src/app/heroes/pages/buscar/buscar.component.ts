import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string = '';
  heroess:Heroe[] = [];
  heroSelected:Heroe | undefined;




  constructor(private heroesService:HeroeService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.heroesService.getSugerenciasAutoComplete(this.termino)
      .subscribe(heroes => this.heroess = heroes);
  }

  optionSelected(evt:MatAutocompleteSelectedEvent){

    if(!evt.option.value){
      this.heroSelected = undefined;
      return;
    }


    const hero:Heroe = evt.option.value;
    this.termino = hero.superhero;

    this.heroesService.getHeroeById(hero.id!)
      .subscribe(resp => this.heroSelected = resp);
  }

}
