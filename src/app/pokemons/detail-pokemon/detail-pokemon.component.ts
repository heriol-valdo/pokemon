import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import {Pokemon} from "../donnees-pokemons/pokemon";
import {POKEMONS} from "../donnees-pokemons/mock-pokemon";
import { PokemonService } from '../pokemons.service';
import { HttpClient } from '@angular/common/http';
import load from 'load-script';





@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css'],
 
})
export class DetailPokemonComponent implements OnInit {

  pokemons !: Pokemon[];
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonsService: PokemonService,private http: HttpClient) {
       
  
  }

  ngOnInit(): void {

    // load('/src/app/pokemos/detail-pokemon/scripts.js', (error, script) => {
    //   if (error) {
    //     console.log('Script loading failed.');
    //   } else {
    //     console.log('Script loaded!');

        
    //   }
    // });

    // this.http.get('./scripts.js', { responseType: 'text' }).toPromise().then((data:any) => {
    //   const parser = new DOMParser();
    //   const doc = parser.parseFromString(data, 'text/html');
    //   const monElement = doc.getElementById('rarete');
    //   if (monElement !== undefined && monElement !== null) {

    //    monElement.innerText="okboss";
        

    //   }
    // }).catch((error: any) => {
    //   console.log(error);
    // });
  

    
   
  
  
   
    this.pokemons= POKEMONS;
    let idUrl =this.route.snapshot.params['id']
    for(let i=0; i < this.pokemons.length; i++){
      if(this.pokemons[i].id==idUrl){
       
        this.pokemon=this.pokemons[i]
      }
    }
  }

  goBack() {
    this.router.navigate(["/pokemon/auth"]);
  }


  Edditing(pokemon : Pokemon) :void{
    if (pokemon) {
      let link =['pokemon/edditing', pokemon.id];
      this.router.navigate(link);
    }
  }
}
