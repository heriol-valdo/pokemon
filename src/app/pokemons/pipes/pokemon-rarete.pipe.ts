import { Pipe, PipeTransform } from "@angular/core";

/**
 * Exemple d'utilisation
 * {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({ name: "pokemonRareteColor" })
export class PokemonRareteColorPipe implements PipeTransform {

// var str = '***';
// let arr = str.split('');
  transform(rarete : string): string {
    let color: string;
   

    switch (rarete) {
      case "****":
        color = "red ligten-1";
        break;

      case "**":
        color = "blue lighten-1";
        break;

      case "***":
        color = "green ligthen-1";
        break;

      default:
        color = "red";
        break;
    }

    return "chip " + color;
  }


  

}
