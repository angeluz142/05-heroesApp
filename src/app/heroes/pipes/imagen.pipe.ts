import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';


/**
 * Just when needed, adding "pure" attribute inside de pipe decorator
 * and setting its value in false, angular always fires an "update"
 * over the object.  Be carefull with load could have in the system
 * 
 * In this case could add it to update the img tag when its url changes.
 */

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(hero: Heroe): string {

console.log(hero);



    if ((!hero.id && !hero.alt_img) && (hero.alt_img=='')) {
      return `assets/no-image.png`;
    } else if (hero.alt_img) {
      return hero.alt_img;
    } else {
      return `assets/heroes/${hero.id}.jpg`;
    }
  }
}
