import { CommonModule } from '@angular/common';
import { Component, inject,  signal,  } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragonball/character-add/character-add.component';
import { Character } from '../../interface/character.interface';
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CommonModule, CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  public dragonBallService = inject(DragonballService);

  // characters = signal<Character[]>([
  //   { id: 1, name: 'Goku', power: 9001 },
  //   { id: 2, name: 'Vegeta', power: 9000 },
  // ])

  // powerClasses = computed(()=>{
  //   return {
  //     'tex-danger': true
  //   }
  // })

  // addCharacter(character: Character) {
  //   this.characters.update( current => [...current, character]);
   
  // }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
