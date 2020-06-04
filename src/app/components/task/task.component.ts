import { Component, OnInit } from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Task} from '../../common/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskList: Task[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList(): void {
   this.dataHandler.taskSubject.subscribe(tasks => {
     this.taskList = tasks;
   });
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }
}
