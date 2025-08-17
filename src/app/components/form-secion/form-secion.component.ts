import { Component } from '@angular/core';

@Component({
  selector: 'app-form-secion',
  imports: [],
  templateUrl: './form-secion.component.html',
  styleUrl: './form-secion.component.css'
})

export class FormSecionComponent {
  taskTitle: string = '';

  addTask() {
    if (this.taskTitle.trim() === '') {
      return;
    }
  }

  

}
