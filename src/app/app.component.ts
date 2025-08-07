import { Component } from '@angular/core';
import { WelcomeLandingComponent } from './components/welcome-landing/welcome-landing.component';


@Component({
  selector: 'app-root',
  imports: [WelcomeLandingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ToDoList';
}
