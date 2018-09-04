import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Pancakes',
      'A pancake is a flat cake, often thin and round, prepared from a starch-based batter that may contain eggs, milk and butter and cooked on a hot surface such as a griddle or frying pan, often frying with oil or butter.',
      'https://www.graceandgoodeats.com/wp-content/uploads/2015/01/homemade-pancakes.jpg',
    ),
    new Recipe(
      'Cake',
      'Cake is a form of sweet dessert that is typically baked. In its oldest forms, cakes were modifications of breads, but cakes now cover a wide range of preparations that can be simple or elaborate, and that share features with other desserts such as pastries, meringues, custards, and pies.',
      'https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg',
    ),
    new Recipe(
      'Apple',
      'An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Honeycrisp.jpg/220px-Honeycrisp.jpg',
    ),
    new Recipe(
      'Banana',
      'A banana is an edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas.',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ0VQK06pPe5EM1m9J8gaqKCiSPiL5ShXlz_iVODv_dT_PmCDG',
    )
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
