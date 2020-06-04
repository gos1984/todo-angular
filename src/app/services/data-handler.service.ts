import { Injectable } from '@angular/core';
import {DataTest} from '../data/data-test';
import {Category} from '../common/category';
import {Priority} from '../common/priority';
import {Task} from '../common/task';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  taskSubject = new BehaviorSubject<Task[]>(DataTest.tasks);
  categorySubject = new BehaviorSubject<Category[]>(DataTest.categories);

  constructor() {}

  public getCategoryList(): Category[] {
    return DataTest.categories;
  }

  public getPrioritiesList(): Priority[] {
    return DataTest.priorities;
  }

  fillTaskList() {
    this.taskSubject.next(DataTest.tasks);
  }

  fillTaskListByCategory(category: Category) {
    const tasks = DataTest.tasks.filter(cat => cat.category === category);
    this.taskSubject.next(tasks);
  }
}
