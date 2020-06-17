import {Component, OnInit} from '@angular/core';
import {Category} from './common/category';
import {Priority} from './common/priority';
import {Task} from './common/task';
import {DataHandlerService} from './services/data-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo-angular';
  taskList: Task[];
  categoryList: Category[];

  constructor(private dataHandler: DataHandlerService) {}

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.taskList = tasks);
    this.dataHandler.getAllCategories().subscribe(category => this.categoryList = category);
  }

}
