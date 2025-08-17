import { Component } from '@angular/core';
import { WelcomeLandingComponent } from './components/welcome-landing/welcome-landing.component';
import { FormSecionComponent } from './components/form-secion/form-secion.component';


@Component({
  selector: 'app-root',
  imports: [WelcomeLandingComponent,  FormSecionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ToDoList';
}
