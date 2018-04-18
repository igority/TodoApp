import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @Output() taskSaved: EventEmitter<Task>;
  constructor() {
    this.taskSaved = new EventEmitter();
  }

  ngOnInit() {
  }

  saveTask(tasktext: string) {
    const newtask = new Task();
    newtask.text = tasktext;
    newtask.done = false;
    this.taskSaved.emit(newtask);
  }

}
