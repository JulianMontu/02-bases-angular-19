import { Injectable, signal } from '@angular/core';
import { Character } from '../interface/character.interface';

@Injectable({ providedIn: 'root' })
export class DragonballService {

    characters = signal<Character[]>([
        { id: 1, name: 'Goku', power: 9001 },
        { id: 2, name: 'Vegeta', power: 9000 },
    ])


    addCharacter(character: Character) {
        this.characters.update(current => [...current, character]);

    }


}