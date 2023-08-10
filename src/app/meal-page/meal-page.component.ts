import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal, MealsService } from '../services/meals.service';
import { MatDialog } from '@angular/material/dialog';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-meal-page',
  templateUrl: './meal-page.component.html',
  styleUrls: ['./meal-page.component.css']
})
export class MealPageComponent implements OnInit {
  faHeart = faHeart;
  id: string | null = null;
  meal!: Meal;
  meals: Meal[] | any = [];
  tags: string[] = [];
  addedToFavourite: boolean = false;
  cannotAddToFavourite: boolean = false;
  map: Map<string, string> = new Map<string, string>();


  constructor(private route: ActivatedRoute, private mealsService: MealsService, public dialog: MatDialog, private addedSnackBar: MatSnackBar, private cannotAddSnackBar: MatSnackBar) {
    this.dialog.closeAll();
  }
  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('meal');
    this.meals = (await this.mealsService.fetchMeal(this.id)).meals;
    this.meal = this.meals[0];
    if (this.meal.strTags) {
      this.tags = this.meal.strTags.split(",");
      console.log(this.tags);
    }

    for (let i = 1; i <= 20; i++) {
      let ingredient = this.meals[0]['strIngredient' + i];
      let measure = this.meals[0]['strMeasure' + i];
      if (ingredient && measure) {
        this.map.set(ingredient, measure);
      }
    }
  }

  addToFavourites(meal: Meal) {
    this.mealsService.addToFavourites(meal);

    if(!this.mealsService.onlyFiveFavouritesAllowed){
      this.addedSnackBar.open('Added to favourites', '', {
        duration: 1500
      });
    } else {
      this.cannotAddSnackBar.open('You can have only 5 meals in your favourites', '', {
        duration: 1500
      });
    }
  }
}
