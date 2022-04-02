import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component:HeroesHomeComponent,
    children: [
      {
        path: 'agregar',
        component: AgregarComponent,
      },
      {
        path: 'editar/:id',
        component: AgregarComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: ':id',
        component: HeroeComponent,
      },
      {
        path: 'home',
        component: HeroesHomeComponent,
      },
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
