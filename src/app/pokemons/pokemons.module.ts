import {InjectionToken, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';


import { Form, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonService } from './pokemons.service';
import { PokemonsComponent } from './list-pokemons/pokemons.component';
import { PokemonEdditing } from '../Edditing-Pokemon/PokemonEdditing.component';
import { FormPokemonComponent } from '../Edditing-Pokemon/Forms/form-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { PokemonTypeColorPipe } from './pipes/pokemon-type-color.pipe';
import { PokemonRareteColorPipe } from './pipes/pokemon-rarete.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { BorderCardDirective } from './directive/border-card.directive';
import { FormPokemonAddComponent } from '../AddPokemon/Forms/form-pokemon.component';
import { LoginComponent } from '../Authentification/login.component';
import { PokemonRoutingModule } from './pokemons-routing.module';
import { Pokemon } from './donnees-pokemons/pokemon';










@NgModule({
  declarations: [
    PokemonsComponent,
    PokemonEdditing,
    FormPokemonComponent,
    DetailPokemonComponent,
    PokemonTypeColorPipe,
    PokemonRareteColorPipe,
    LoginComponent,
    FormPokemonAddComponent,
    
   
    BorderCardDirective
  ],
  imports: [
   CommonModule,
   
    FormsModule,
    ReactiveFormsModule ,
    PokemonRoutingModule
   
  ],
  providers: [PokemonService],
  
  bootstrap: []
})
export class PokemonsModule {
}
