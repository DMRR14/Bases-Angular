// Esta clase se convertira en componente al utilizar decorador @component que se importa de @angular/core
import {Component} from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `
      <h3>Counter: {{ counter }}</h3>

      <button (click)="increaseBy(+1)">+1</button>
      <button (click)="resetCounter()">Reset</button>
      <button (click)="increaseBy(-1)">-1</button>
    `,
  }
)
export class CounterComponent {
  public counter:number = 10

  // increaseBy():void{
  //   this.counter += 1
  // }
  increaseBy(value: number):void{
    this.counter += value
  }

  resetCounter() {
    this.counter = 10
  }
  constructor() { }

}
