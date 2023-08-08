import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RandomMealComponent } from '../random-meal/random-meal.component';
import { Router } from '@angular/router';
import { CategoryMeal, MealsService } from '../services/meals.service';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {
  faSeedling = faSeedling;

  constructor(public dialog: MatDialog, private router: Router, public readonly mealsService: MealsService) { }
  
  ngOnInit() {
    this.mealsService.fetchAllCategories();
  }

}
