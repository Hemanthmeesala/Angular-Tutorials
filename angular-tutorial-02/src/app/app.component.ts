import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'app-root',
  imports: [LoginComponent,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tutorial-2';
  name:string = "Hemanth";
  data:number | string= 15;
  userlogin:boolean = true;
  info:any = 123;

  apple() {
    this.data = "HK";
    this.info = "I am passed";
  }

  sum(a:number,b:number) {
    console.log(a+b);
  }
}
