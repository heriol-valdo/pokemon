import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Pokemon } from '../pokemons/donnees-pokemons/pokemon';
import { POKEMONS } from '../pokemons/donnees-pokemons/mock-pokemon';
import { PokemonService } from '../pokemons/pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './pokemonedditing.component.html',
 
})
export class PokemonEdditing implements OnInit {

  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    this.pokemons= POKEMONS;
    let idUrl =this.route.snapshot.params['id']
    for(let i=0; i < this.pokemons.length; i++){
      if(this.pokemons[i].id==idUrl){
        this.pokemon=this.pokemons[i]
      }
    }
    
  }

  goBack() {
    this.router.navigate(["/pokemon/all"]);
  }


  Edditing(pokemon : Pokemon) :void{
    let link =['/pokemon/edditing', pokemon.id];
    this.router.navigate(link);
  }
}
