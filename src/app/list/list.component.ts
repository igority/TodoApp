import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() tasks: Task[];
  constructor() { }

  ngOnInit() {
  }

}
