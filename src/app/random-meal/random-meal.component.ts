import { Component, Inject, OnInit } from '@angular/core';
import { MealDBResponse, MealsService } from '../services/meals.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-random-meal',
  templateUrl: './random-meal.component.html',
  styleUrls: ['./random-meal.component.css']
})
export class RandomMealComponent implements OnInit {

  mealDBresponse: MealDBResponse | any;

  constructor(private readonly mealsService: MealsService, private router: Router, public dialog: MatDialog) { }
  async ngOnInit() {
    this.mealDBresponse = await this.mealsService.getRandomMeal();
  }

  async generateAnother() {
    this.mealDBresponse = await this.mealsService.getRandomMeal();
  }

  clicked(category: string, mealId: string) {
    this.dialog.closeAll();

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['categories', category, mealId]);
    });
  }

  closeDialog(){
    this.dialog.closeAll();
  }
}
