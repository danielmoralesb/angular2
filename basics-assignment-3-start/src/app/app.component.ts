import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  styles: [
    `
      .white {
        color: white;
      }
    `,
  ],
})
export class AppComponent {
  showText: boolean = false;
  count = 0;
  counter = [];

  toggleText() {
    this.showText = !this.showText;
    this.count++;
    // this.counter.push(this.count);
    this.counter.push(new Date());
  }
}
