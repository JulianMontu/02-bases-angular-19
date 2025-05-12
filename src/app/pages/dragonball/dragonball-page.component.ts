import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';


interface Character {
  id: number,
  name: string,
  power: number,
}
@Component({
  selector: 'app-dragonball-page',
  imports: [CommonModule],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css'
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(1000);
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Picolo', power: 3000 },
    { id: 4, name: 'Yamcha', power: 500 }
  ])

  // powerClasses = computed(()=>{
  //   return {
  //     'tex-danger': true
  //   }
  // })

}
