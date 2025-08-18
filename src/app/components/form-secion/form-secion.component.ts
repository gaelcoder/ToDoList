import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; //diretivas comuns como ngIf
import { task } from '../../models/task.model'; //import da interface

@Component({
  selector: 'app-form-secion',
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-secion.component.html',
  styleUrl: './form-secion.component.css'
})

export class FormSecionComponent {
  
  taskForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void { // o angular precisa disso pra implementar a classe que o angular inicializa uma vez e podemos inserir lógicas complexas

    this.taskForm = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      deadline: ['', Validators.required],
      urgency: ['Medium', Validators.required] //aqui entram os valores que vão ser inseridos pelo usuário no formulário, e os validators vão funcionar de acordo com a interface
    });

  }

  onSubmit(): void {

    if (this.taskForm.invalid){
      console.error('Invalid form!');
      return;
    }

    const newTask: task = {
      id: Date.now(),
      ...this.taskForm.value, // aqui é carregado os campos do objeto que foram colocados no form automaticamente pelo angular, os que estão de fora são porque são criados automaticamente.
      createdAt: new Date(),
      status: 'Pending',
      completed: false
    };

    this.saveTaskToLocalStorage(newTask);
    this.taskForm.reset({
      urgency: "Medium"
    }); //reiniciando o form após a criação de uma nova task

  }

  private saveTaskToLocalStorage(task: task): void{
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log('Task saved successfully!'); // lógica de inserção das tasks e recuperação delas no localStorage
  } 

}
