import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent} from "./pokemons/list-pokemons/pokemons.component";
import { PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {DetailPokemonComponent} from "./pokemons/detail-pokemon/detail-pokemon.component";
import { PokemonEdditing } from './Edditing-Pokemon/PokemonEdditing.component';
import { FormPokemonComponent } from './Edditing-Pokemon/Forms/form-pokemon.component';
import { FormPokemonAddComponent } from './AddPokemon/Forms/form-pokemon.component';
import { LoginComponent } from './Authentification/login.component';


const routes: Routes = [
  { path:"", redirectTo: 'pokemon/auth', pathMatch:"full" },
  { path: "pokemon/auth", component: PokemonsComponent },
  { path: "pokemon/all", component: LoginComponent },
  { path: "pokemon/add", component: FormPokemonAddComponent },
  { path: "pokemon/:id", component: DetailPokemonComponent },
  { path: "pokemon/suppression/:id", component: FormPokemonComponent },
  { path: "pokemon/edditing/:id", component: PokemonEdditing },
 
  


  { path: "**", component: PageNotFoundComponent } // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
