import { Component, computed, signal, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'signals';

  count = signal<number>(1);

  firstName = signal<string>("angular")

  lastName = signal<string>("learning")

  fullName = computed(() => this.firstName() + this.lastName())

  constructor() {

    effect(() => console.log(`fullName is ${this.fullName()}`))
  }
  


  increaseCount() {
    this.count.update((val) => val + 1);
  }

  decreaseCount() {
    this.count.update((val) => val - 1);
  }



}
