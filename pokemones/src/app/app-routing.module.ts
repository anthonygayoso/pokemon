import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { RoutesUrl } from './enums/routes.enum';

const routes: Routes = [
  {
    path: '**', 
    component: PokemonComponent 
  },
  {
    path: RoutesUrl.pokemon,
    component: PokemonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
