import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Publisher, Heroe } from '../../interfaces/heroe.interface';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [],
})
export class AgregarComponent implements OnInit {
  creadores: string[] = [];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    alt_img: '',
    publisher: Publisher.DCComics,
  };

  constructor(
    private srvHeroe: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.cargarCreadores();
  }

  ngOnInit(): void {
    // got hero's id
    // this.activatedRoute.params
    //   .subscribe(({id}) => console.log(id))

    console.log(this.router.url.includes('editar'));

    if (!this.router.url.includes('editar')) {
      return;
    } else {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.srvHeroe.getHeroeById(id)))
        .subscribe((heroo) => (this.heroe = heroo));
    }
  }

  cargarCreadores() {
    for (let creator in Publisher) {
      this.creadores.push(creator);
    }
  }

  grabar() {
    if (this.heroe.superhero.trim().length === 0) return;

    if (this.heroe.id) {
      this.srvHeroe
        .actualizarHeroe(this.heroe)
        .subscribe((resp) => console.log('actualizando', resp));
    } else {
      this.srvHeroe.agregarHeroe(this.heroe).subscribe((resp) => {
        this.router.navigate(['/heroes/editar', resp.id]);
      });
    }
  }

  eliminar(){
    this.srvHeroe.eliminarHeroe(this.heroe.id!)
      .subscribe(resp => {
        this.router.navigate(['heroes']);
      });
  }


}
