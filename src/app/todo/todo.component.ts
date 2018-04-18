import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks: Task[];
  constructor() {
    this.tasks = new Array<Task>();
  }

  ngOnInit() {
  }


  saveTask(newtask: Task) {
    this.tasks.push(newtask);
  }

}
