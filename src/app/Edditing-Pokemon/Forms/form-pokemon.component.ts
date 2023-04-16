import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';
import { POKEMONS } from 'src/app/pokemons/donnees-pokemons/mock-pokemon';
import { Pokemon } from 'src/app/pokemons/donnees-pokemons/pokemon';
import { PokemonService } from 'src/app/pokemons/pokemons.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'form-pokemon',
    templateUrl: './form-pokemon.component.html',
    styleUrls: ['./form-pokemon.component.css']
    
})
export class FormPokemonComponent implements OnInit {
    
    @Input() pokemon: any;

    types: any = [];
  

    constructor(
        private pokemonService: PokemonService,
        private route: ActivatedRoute,
        private router: Router
    ){}

    ngOnInit(): void {
        this.types = this.getPokemonTypes();
      
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy', 'Roche', 'Sol', 'Spectre', 'Glace', 'Dragon', 'Acier', 'Ténèbres'];
    }

  
    
    // Détermine si le type passé en paramètres appartient ou non au pokémon en cours d'édition.
   
    hasType(type: string): boolean {
        let index = this.pokemon.types.indexOf(type);
        if (index > -1){
            return true;
        }

        return false;
    }

    // Méthode appelée lorsque l'utilisateur ajoute ou retire un type à un pokémon.

    selectType($event: any, type: string): void {

        let checked = $event.target.checked;

        if (checked) {
            this.pokemon.types.push(type);
        }else{
            let index = this.pokemon.types.indexOf(type);
            if (index > -1){
                this.pokemon.types.splice(index, 1);
            }
        }
    }

    

    // Valide le nombre de types pour chaque pokémon.

    isTypesValid(type: string): boolean {
        if (this.pokemon.types.length === 1 && this.hasType(type)){
            return false;
        }

        if (this.pokemon.types.length >= 3 && !this.hasType(type)){
            return false;
        }

        return true;
    }
    

    onSubmit(): void {
        let link = ['/pokemon', this.pokemon.id];
        this.router.navigate(link);
    }

   

    //supression de pokemon
    PokemonSuppression(pokemon : Pokemon) :void{

        this.pokemonService.deletePokemon(pokemon)
        .subscribe(() => {
            this.router.navigate(['/pokemon/auth']);
        });

    //   let index= POKEMONS.indexOf(this.pokemon)
    //   if(index > -1) POKEMONS.splice(index,1)
    //   this.router.navigate(['/pokemon/all']);



   
    }

    Details() :void{
      let link =['/pokemon', this.pokemon.id];
      this.router.navigate(link);
    }

}



