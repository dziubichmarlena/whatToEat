import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RandomMealComponent } from './random-meal/random-meal.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryMealsComponent } from './category-meals/category-meals.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MealPageComponent } from './meal-page/meal-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    RandomMealComponent,
    CategoriesPageComponent,
    CategoryMealsComponent,
    ToolbarComponent,
    MealPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatButtonModule, 
    FontAwesomeModule, 
    MatDialogModule,
    MatInputModule, 
    MatTooltipModule, 
    MatPaginatorModule, 
    MatTableModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
