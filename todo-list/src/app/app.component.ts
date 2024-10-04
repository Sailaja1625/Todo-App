import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { NgFor, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    FormsModule,
    InputTextModule,
    InputSwitchModule,
    ButtonModule, NgFor, NgIf,
    CardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'todo-list';
  task: any;
  tasks: string[] = [];
  editingIndex: number | null = null;
  editTaskValue: string = '';


  addTask() {
    this.tasks.push(this.task);
    this.task = '';
  }

  removeTask(i: number) {
    this.tasks.splice(i, 1);
  }

  editTask(i: number) {
    this.editingIndex = i;
    this.editTaskValue = this.tasks[i];
    
  }

  saveTask(){
    if (this.editingIndex!== null && this.editTaskValue.trim() !== '') {
      this.tasks[this.editingIndex] = this.editTaskValue;
    }
    this.cancelEdit();
  }
  
  cancelEdit() {
    this.editingIndex = null;
    this.editTaskValue = '';
  }

}


