import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ConfirmComponent } from '../../components/generic-tools/confirm/confirm.component';
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

  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private srvHeroe: HeroeService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
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
        .subscribe((resp) =>
          this.alertOperationStatus('Registro actualizado.')
        );
    } else {
      this.srvHeroe.agregarHeroe(this.heroe).subscribe((resp) => {
        this.router.navigate(['/heroes/editar', resp.id]);
        this.alertOperationStatus('Registro exitoso.');
      });
    }
  }

  eliminar() {
    // invoke dialog and receive the result through local variable
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '350px',
      data: this.heroe,
    });

    // execute the action while true
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.srvHeroe.eliminarHeroe(this.heroe.id!).subscribe((resp) => {
          this.router.navigate(['heroes']);
          this.alertOperationStatus('Registro eliminado.');
        });
      }
    });
  }

  alertOperationStatus(msj: string) {
    this.snackBar.open(msj, '', {
      duration: 2500,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
