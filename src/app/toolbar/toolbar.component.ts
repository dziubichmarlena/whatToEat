import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RandomMealComponent } from '../random-meal/random-meal.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(public dialog: MatDialog, private router: Router) { }

  openDialog() {
    const dialogRef = this.dialog.open(RandomMealComponent, {
      width: '400px',
      height: '200px',
      data: {}
    });
  }

  navigateToHome() {
    this.router.navigate(['/']);
  }

}
