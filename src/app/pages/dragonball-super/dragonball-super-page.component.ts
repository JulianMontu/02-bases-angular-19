import { CommonModule } from '@angular/common';
import { Component,  signal } from '@angular/core';


interface Character {
  id: number,
  name: string,
  power: number,
}
@Component({
  selector: 'app-dragonball-super-page',
  imports: [CommonModule],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ])

  // powerClasses = computed(()=>{
  //   return {
  //     'tex-danger': true
  //   }
  // })

  addCharacter() {
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update((current) => [...current, newCharacter]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(0);
  }
}
