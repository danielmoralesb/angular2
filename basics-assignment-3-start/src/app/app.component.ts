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

  toggleText(event: Event) {
    console.log(event);
    this.showText = !this.showText;
    this.count++;
    this.counter.push(this.count);
    console.log('this is the count: ' + this.count);
    console.log('bigger than 4: ' ? this.counter.length > 4 : false);
  }
}
