import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import { Form, FormsModule } from '@angular/forms';
import { PokemonService } from './pokemons/pokemons.service';
import { PokemonsModule } from './pokemons/pokemons.module';

import {HttpClientModule} from '@angular/common/http'
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';





@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{dataEncapsulation:false}),
    FormsModule,
    PokemonsModule,
   
    AppRoutingModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
