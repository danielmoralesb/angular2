import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class UsernameComponent {
  emptyUserName = true;
  userName = '';

  onCreateUserName() {
    this.userName = '';
  }
}
