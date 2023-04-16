import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../donnees-pokemons/pokemon";
import { POKEMONS } from "../donnees-pokemons/mock-pokemon";
import {Router} from "@angular/router";
import { PokemonService } from "../pokemons.service";


import 'jspdf-autotable';
import { PokemonPdfService } from "src/app/ServicePdf/pokemon-service-pdf.component";





import { Observable, of, BehaviorSubject, Subject } from "rxjs"; //importez BehaviorSubject
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators'; //importez les opérateurs nécessaires


@Component({
  selector: "list-pokemon",
  templateUrl: "./pokemons.component.html",
  styleUrls: ['./style-pokemon.component.css'],
})
export class PokemonsComponent implements OnInit {
  pokemons !: Pokemon[];
 
  constructor(private router: Router, private pokemonService: PokemonService, private pokemonPdfService: PokemonPdfService) {
    
  }

 

  ngOnInit(): void {
        this.pokemonService.getPokemons().subscribe(
          (pokemons) => {
            this.pokemons = pokemons;
           
          }
        );
      
  }



  selectPokemon(pokemon: Pokemon) {
    console.log(pokemon.id);
    let link = ["/pokemon", pokemon.id];
    this.router.navigate(link); // redirect to "/pokemon/1"
  }

  AddPokemon() {
    this.router.navigate(["/pokemon/add"]);
  }

  logoat() {
    this.router.navigate(["/pokemon/all"]);
  }



   generatePdf(): void {
    this.pokemonPdfService.generatePdf(this.pokemons);
  }

  search(rarete?: string, type?: string, name?: string) {
    this.pokemonService.searchPokemons(rarete, type, name).subscribe((pokemons: Pokemon[]) => {
      this.pokemons = pokemons;
    });
  }

}
