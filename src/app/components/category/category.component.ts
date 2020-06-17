import {Component, Input, OnInit} from '@angular/core';
import {Category} from '../../common/category';
import {DataHandlerService} from '../../services/data-handler.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  categoryList: Category[];
  selectedCategory: Category;

  constructor(private dataHandler: DataHandlerService) { }

  ngOnInit(): void {
  }

  // private getCategoryList() {
  //   this.dataHandler.getAllCategories().subscribe(category => this.categoryList = category);
  // }

  showTaskByCategory(category: Category): void {
    // this.selectedCategory = category;
    // this.dataHandler.fillTaskListByCategory(category);
  }

}
