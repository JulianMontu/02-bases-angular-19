import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import type { Character } from '../../../interface/character.interface';

@Component({
  selector: 'dragon-character-list',
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush, // opcional, pero recomendable con signals
})
export class CharacterListComponent {
  characters = input<Array<Character>>();
  listTitle = input<string>();
}
