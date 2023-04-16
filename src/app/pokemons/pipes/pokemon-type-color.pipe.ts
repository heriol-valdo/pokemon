import { Pipe, PipeTransform } from "@angular/core";

/**
 * Exemple d'utilisation
 * {{ pokemon.type | pokemonTypeColor }}
 */
@Pipe({ name: "pokemonTypeColor" })
export class PokemonTypeColorPipe implements PipeTransform {

  transform(type: string): string {
    let color: string;

    switch (type) {
      case "Feu":
        color = "red ligten-1";
        break;

      case "Eau":
        color = "blue lighten-1";
        break;

      case "Plante":
        color = "green ligthen-1";
        break;

      default:
        color = "red";
        break;
    }

    return "chip " + color;
  }


  

}
