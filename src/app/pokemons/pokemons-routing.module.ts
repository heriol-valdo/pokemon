import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { FormPokemonComponent } from '../Edditing-Pokemon/Forms/form-pokemon.component';
import { PokemonEdditing } from '../Edditing-Pokemon/PokemonEdditing.component';
import { FormPokemonAddComponent } from '../AddPokemon/Forms/form-pokemon.component';
import { LoginComponent } from '../Authentification/login.component';



// const pokemonsRoutes: Routes = [
 
//   { path: "pokemon/all", component: PokemonsComponent },
//   { path: "pokemon/:id", component: DetailPokemonComponent },
//   { path: "pokemon/edditing/:id", component: PokemonEdditing },
// ];


const pokemonsRoutes: Routes = [
   { path: "pokemon", 
     children:[
        {path: "all", component: LoginComponent,},
        {path: "auth", component: PokemonsComponent,},
        {path: "add", component: FormPokemonAddComponent,},
        {path: "edditing/:id", component: PokemonEdditing,},
        {path: ":id", component: DetailPokemonComponent,}

     ]
    },
   
  ];

@NgModule({
  imports: [RouterModule.forChild(pokemonsRoutes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
