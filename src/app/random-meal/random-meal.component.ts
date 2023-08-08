import { Component, Inject, OnInit} from '@angular/core';
import { Kitchen, MealsService } from '../services/meals.service';


@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {

 kitchen: Kitchen | any;

  constructor(private readonly mealsService: MealsService){}
 async ngOnInit() {
    this.kitchen = await this.mealsService.getRandomMeal();
  }

  async generateAnother(){
    this.kitchen = await this.mealsService.getRandomMeal();
  }
}
