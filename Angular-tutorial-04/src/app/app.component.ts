import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular-tutorial-4';
  username: string = '';

  getUserName(event: Event) {
    // this.username = (event.target as HTMLInputElement).value;
  }

  setUserName() {
    this.username = "John";
  }

  GetUserNameWithTemplate(val:string) {
    this.username = val;
  }
}
