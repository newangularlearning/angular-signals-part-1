import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'signals';

  count = signal<number>(1);

  increaseCount(){
    this.count.update((val) => val + 1);
  }

  decreaseCount(){
    this.count.update((val) => val - 1);
  }

}
