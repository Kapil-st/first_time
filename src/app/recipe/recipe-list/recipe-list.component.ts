import { Component, OnInit } from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe( 'Steak Recipe', 'This is just awesome', 'ssss.jpg'),
    new Recipe( 'Field Recipe', 'This is just awesome', 'ssss.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
