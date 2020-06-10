import { Component, OnInit } from '@angular/core';
import {Category} from '../../common/category';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[];

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
    this.getCategoryList();
  }

  private getCategoryList() {
    this.dataHandler.getAllCategories().subscribe(category => this.categoryList = category);
  }

  showTaskListByCategory(category: Category): void {
    // this.selectedCategory = category;
    // this.dataHandler.fillTaskListByCategory(category);
  }

}
