import { Injectable } from '@angular/core';
import {DataTest} from '../data/data-test';
import {Category} from '../common/category';
import {Priority} from '../common/priority';
import {Task} from '../common/task';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {TaskArray} from '../data/dao/impl/TaskArray';
import {CategoryArray} from '../data/dao/impl/CategoryArray';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskArray = new TaskArray();
  private categoryArray = new CategoryArray();

  constructor() {}

  getAllTasks(): Observable<Task[]> {
    return this.taskArray.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryArray.getAll();
  }

  // taskSubject = new BehaviorSubject<Task[]>(DataTest.tasks);
  // categorySubject = new BehaviorSubject<Category[]>(DataTest.categories);
  //
  // constructor() {}
  //
  // public getCategoryList(): Category[] {
  //   return DataTest.categories;
  // }
  //
  // public getPrioritiesList(): Priority[] {
  //   return DataTest.priorities;
  // }
  //
  // fillTaskList() {
  //   this.taskSubject.next(DataTest.tasks);
  // }
  //
  // fillTaskListByCategory(category: Category) {
  //   const tasks = DataTest.tasks.filter(cat => cat.category === category);
  //   this.taskSubject.next(tasks);
  // }
}
