import { Component, OnInit } from '@angular/core';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import { MealsService } from '../services/meals.service';
import { MatDialog } from '@angular/material/dialog';
import { RandomMealComponent } from '../random-meal/random-meal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{
  faLemon = faLemon;
  constructor(private readonly mealsService: MealsService,  public dialog: MatDialog, private router: Router){}

 
  openDialog() {
      const dialogRef = this.dialog.open(RandomMealComponent, {
        width: '400px',
        height: '200px',
      });
  }

  navigateToCategories(){
    this.router.navigate(['categories']);
  }

}
