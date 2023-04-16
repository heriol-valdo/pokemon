import { Component, OnInit, Inject } from '@angular/core';
import { Pokemon } from 'src/app/pokemons/donnees-pokemons/pokemon';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import {FormBuilder}from '@angular/forms' ;
import {MatRadioModule} from '@angular/material/radio';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PokemonService } from 'src/app/pokemons/pokemons.service';



@Component({
    selector: 'formadd-pokemon',
    templateUrl: './form-pokemon.component.html',
    styleUrls: ['./form-pokemon.component.css']

})
export class FormPokemonAddComponent   implements OnInit{
 
    pokemonForm!: FormGroup;
  
    pokemons : Pokemon[]=[];

    monFormulaire: FormGroup;

    

    types: string[] = [
        'Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 
        'Vol', 'Combat', 'Psy', 'Roche', 'Sol', 'Spectre', 'Glace', 'Dragon', 
        'Acier', 'Ténèbres'
      ];


    constructor(private formBuilder: FormBuilder, 
      private route: ActivatedRoute, 
      private router: Router,
      private pokemonService: PokemonService,
      ){
     
      
        this.monFormulaire = this.formBuilder.group({
            name: ['', Validators.required],
            hp: ['', Validators.required],
            cp: ['', Validators.required],
            picture: ['', Validators.required],
            rarete: ['', Validators.required],
            type: ['', Validators.required],
          
          });
    }

    ngOnInit(): void {
        this.pokemons = [];

      
    }

    Retour(){
      this.router.navigate(["/pokemon/auth"]);
    }



    ajouterChoix(event: any) {
        const choixSelectionne = event.target.value;
      
        const choixActuels = this.monFormulaire.get('type')?.value ?? [];
        if (event.target.checked) {
          if (choixActuels.length < 3) {
            this.monFormulaire.get('type')?.setValue([...choixActuels, choixSelectionne]);
          } else {
            event.target.checked = false;
          }
        } else {
          const index = choixActuels.indexOf(choixSelectionne);
          if (index !== -1) {
            choixActuels.splice(index, 1);
            this.monFormulaire.get('type')?.setValue([...choixActuels]);
          }
        }
      }


  onSubmit() {
    if (this.monFormulaire) {
        const nouvelElement = {
          id: Math.floor(Math.random() * 101),
          hp: this.monFormulaire.get('hp')?.value,
          cp: this.monFormulaire.get('cp')?.value,
          name: this.monFormulaire.get('name')?.value,
          picture: this.monFormulaire.get('picture')?.value,
          types: this.monFormulaire.get('type')?.value,
          rarete: this.monFormulaire.get('rarete')?.value,
          created: new Date(),
         
        };
        if (nouvelElement.name && nouvelElement.id && nouvelElement.types && nouvelElement.hp && nouvelElement.cp
            && nouvelElement.rarete && nouvelElement.picture) {
                
            

               this.pokemons.unshift(nouvelElement); 
               this.pokemonService.addPokemon(nouvelElement)
        .subscribe(() => {

          this.monFormulaire.reset();
          console.log(this.pokemons);
          this.router.navigate(["/pokemon/auth"]);
        });
          
               
               //this.router.navigate(["/pokemon/all"]);
        }
      }
  }
}

