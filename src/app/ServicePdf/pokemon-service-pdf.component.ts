import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import { Pokemon } from '../pokemons/donnees-pokemons/pokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonPdfService {

  constructor() { }

  generatePdf(pokemons: Pokemon[]): void {
    const doc = new jsPDF();

    doc.setFontSize(22);
    doc.text('Liste des Pokémons', 20, 20);

    const data = pokemons.map(pokemon => [pokemon.id, pokemon.name, pokemon.rarete,pokemon.hp, pokemon.cp,pokemon.types,pokemon.created]);

    (doc as any).autoTable({
      head: [['ID', 'Nom', 'Rareté','point de vie','point attaque','types pokemon','date de creation']],
      body: data,
      startY: 30,
      margin: { horizontal: 10 },
      styles: { overflow: 'linebreak' },
    });

    doc.save('liste_pokemons.pdf');
  }
}