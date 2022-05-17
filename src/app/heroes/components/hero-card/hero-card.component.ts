import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styles: [
    `
      mat-card{
        margin-top:20px;
      }
    `
    ]
})
export class HeroCardComponent {

  // We specify that hero always is going to have a value
@Input() hero!:Heroe;

}
