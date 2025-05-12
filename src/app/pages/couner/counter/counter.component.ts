import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {

  counter = 10;
  counterSignal = signal(10);

  increaseBy(value: number): void {
    this.counter += value;
    // this.counterSignal.set(this.counter + value);
    // this.counterSignal.update((prev) => prev + value);
    this.counterSignal.update((prev) => prev + value);
  }

  resetCounter(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
