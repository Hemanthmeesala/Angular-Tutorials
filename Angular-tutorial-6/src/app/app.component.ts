import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-tutorial-6';
  display = true;
  val = 10;
  DisplayOneDiv = true;

  hide() {
    this.display = false;
  }
  Show() {
    this.display = true;
  }

  toggle() {
    this.display = !this.display
  }

  toggleDiv() {
    this.DisplayOneDiv = !this.DisplayOneDiv
  }
}
