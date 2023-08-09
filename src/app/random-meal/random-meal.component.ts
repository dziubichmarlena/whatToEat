import { Component, Inject, OnInit} from '@angular/core';
import { MealDBResponse, MealsService } from '../services/meals.service';


@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {

 mealDBresponse: MealDBResponse | any;

  constructor(private readonly mealsService: MealsService){}
 async ngOnInit() {
    this.mealDBresponse = await this.mealsService.getRandomMeal();
  }

  async generateAnother(){
    this.mealDBresponse = await this.mealsService.getRandomMeal();
  }
}
