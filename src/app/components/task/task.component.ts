import {Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Task} from '../../common/task';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  taskList: Task[];
  dataSource: MatTableDataSource<Task>;
  displayedColumns: string[] = ['id', 'name', 'priority', 'category', 'date', 'completed'];

  constructor(private dataHandler: DataHandlerService) {
  }

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.dataHandler.taskSubject.subscribe(tasks => this.taskList = tasks);
    this.dataSource = new MatTableDataSource();
    this.refreshDataSource();
    this.dataSource.sort = this.sort;
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  private refreshDataSource() {
    this.dataSource.data = this.taskList;
  }

}
