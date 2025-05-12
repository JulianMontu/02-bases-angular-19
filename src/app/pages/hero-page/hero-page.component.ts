import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [CommonModule],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css'
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => {return `${ this.name() } - ${ this.age() }`});
  getHeroDescription(){
    return `${ this.name() } - ${ this.age() }`;
  }

  changeHero(){
    this.name.set('Spiderman');
    this.age.set(25);
  }

  resetForm(){
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge(){
    this.age.set(60);
  }

}
