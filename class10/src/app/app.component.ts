import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // title = 'class10';
  test: string = 'Hello World';
  constructor() {
    setTimeout(() => {
      this.test = 'Goodbye World';
    }, 3000);
  }
}
