import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RandomMealComponent } from '../random-meal/random-meal.component';
import { faHeart, faRemove } from '@fortawesome/free-solid-svg-icons';
import { Meal, MealsService } from '../services/meals.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  faHeart = faHeart;
  faRemove = faRemove;
  favourites: Meal[] = [];

  constructor(public dialog: MatDialog, private router: Router, private mealsService: MealsService) { }
  ngOnInit() {
    this.favourites = this.mealsService.getFavourites();
  }

  openDialog() {
    const dialogRef = this.dialog.open(RandomMealComponent, {
      width: '400px',
      height: '200px'
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

  getFavourites() {
    this.favourites = this.mealsService.getFavourites();
  }
  
  navigateToMeal(category: string, id: string){

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['categories', category, id]);
    });
  }

  removeFromFavourites(meal: Meal){
    this.mealsService.removeFromFavourites(meal);
  }
}
