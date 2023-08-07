import { Component, OnInit } from '@angular/core';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import { MealsService } from '../services/meals.service';
import { MatDialog } from '@angular/material/dialog';
import { RandomMealComponent } from '../random-meal/random-meal.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent{
  faLemon = faLemon;
  constructor(private readonly mealsService: MealsService,  public dialog: MatDialog){}

 
  openDialog() {
    const timeout = 1500;
      const dialogRef = this.dialog.open(RandomMealComponent, {
        width: '350px',
        height: '100px',
        data: {}
      });

      // dialogRef.afterOpened().subscribe(_ => {
      //   setTimeout(() => {
      //     dialogRef.close();
      //   }, timeout)
      // })
  }

}
