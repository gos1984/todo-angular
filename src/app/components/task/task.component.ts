import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Task} from '../../common/task';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit, AfterViewInit {

  taskList: Task[];
  dataSource: MatTableDataSource<Task>;
  displayedColumns: string[] = ['color', 'id', 'name', 'priority', 'category', 'date', 'completed'];

  constructor(private dataHandler: DataHandlerService) {
  }

  @ViewChild(MatPaginator, {static: false}) private paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) private sort: MatSort;

  ngOnInit(): void {
    this.dataHandler.getAllTasks().subscribe(tasks => this.taskList = tasks);
    this.dataSource = new MatTableDataSource();
    this.refreshDataSource();
  }

  ngAfterViewInit(): void {
    this.updateSortAndPagination();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task) {
    return task.priority?.color;
  }

  private refreshDataSource() {
    this.dataSource.data = this.taskList;
    this.updateSortAndPagination();

    this.dataSource.sortingDataAccessor = (task, colName) => {
      switch (colName) {
        case 'priority': {
          return task.priority?.id;
        }
        case 'category': {
          return task.category?.name;
        }
        case 'date': {
          return task.date;
        }
        default: {
          return task[colName];
        }
      }
    };
  }

  private updateSortAndPagination() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
