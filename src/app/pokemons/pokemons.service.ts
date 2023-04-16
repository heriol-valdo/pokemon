import {Injectable } from "@angular/core";
import { Pokemon } from "./donnees-pokemons/pokemon";
import { POKEMONS } from "./donnees-pokemons/mock-pokemon";



import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import {of} from "rxjs";
import { catchError,tap } from "rxjs";

@Injectable()

export class PokemonService{

 constructor(private http:HttpClient){}
 
private pokemonUrl = 'api/pokemons';



private log(log: string){
  console.info(log)
}


private handleError<T>(operation= 'operation', result?:T){
   return (error: any): Observable<T>=>{
     console.log(error);
     console.log(`${operation} failed: ${error.message}`)

     return of(result as T);
   }
 }

// le pipe async est un pipe capable de consommerr des observables (ou promise) en appelant implicitemet 
//la methode subcride  ( ou then ) afin de binder les valeurs contenus dans l'observable ( ou promise )
getPokemons():Observable<Pokemon[]>{
        return this.http.get<Pokemon[]>(this.pokemonUrl).pipe(
          tap(_ => this.log(`fetched pokemons`)),
           catchError(this.handleError(`getPokemons`, []))
        );
 }

 deletePokemon(pokemon: Pokemon): Observable<void> {
  const url = `${this.pokemonUrl}/${pokemon.id}`;
  return this.http.delete<void>(url);
 
  }



 
  addPokemon(pokemon: Pokemon): Observable<void> {
    return this.http.post<Pokemon>(this.pokemonUrl, pokemon).pipe(
      tap(_ => this.log(`added pokemon`)),
      catchError(this.handleError<Pokemon>(`addPokemon`)),
      map(() => {}) // nous retournons un Observable<void> qui émet une valeur vide
    );
  }
  
      


   
    //Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon>{
      const url = `${this.pokemonUrl}/${id}`
  
      return this.http.get<Pokemon>(url).pipe(
        tap(_ => this.log(`fetched pokemons`)),
        catchError(this.handleError<Pokemon>(`getPokemon id=${id}`))
      )
    }

 //retourne le pokemon avec l'identifiant passer en parametre

 getPokemonv(id : number){
    let pokemons = POKEMONS
    for (let i = 0; i < pokemons.length; i++) {
        if (pokemons[i].id.toString() === id.toString()) {
         return pokemons[i]
        }
      }
   return null;
   }

   getPokemonTypes(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Combat', 'Psy', 'Roche', 'Sol', 'Spectre', 'Glace', 'Dragon', 'Acier', 'Ténèbres'];
}



searchPokemons(rarete?: string, type?: string, name?: string): Observable<Pokemon[]> {
  return this.getPokemons().pipe(
    map(pokemons => {
      return pokemons.filter(pokemon => {
        let match = true;
        if (rarete && pokemon.rarete !== rarete) {
          match = false;
        }
        if (type && !pokemon.types.includes(type)) {
          match = false;
        }
        if (name && !pokemon.name.toLowerCase().includes(name.toLowerCase())) {
          match = false;
        }
        return match;
      });
    })
  );
}

}