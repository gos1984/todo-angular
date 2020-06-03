import { Component } from '@angular/core';
import {Category} from './common/category';
import {Priority} from './common/priority';
import {Task} from './common/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-angular';
}
