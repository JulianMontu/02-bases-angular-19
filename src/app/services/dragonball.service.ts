import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interface/character.interface';

const loadFromLocalStorage = () => {
    const characters = localStorage.getItem('characters');
    return characters ? JSON.parse(characters) : [];
}

@Injectable({ providedIn: 'root' })
export class DragonballService {

    characters = signal<Character[]>(loadFromLocalStorage());

    saveToLocalStorage = effect(() => {
        localStorage.setItem('characters', JSON.stringify(this.characters()));
    });


    addCharacter(character: Character) {
        this.characters.update(current => [...current, character]);

    }


}