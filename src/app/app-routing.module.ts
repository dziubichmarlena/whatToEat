import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CategoriesPageComponent } from './categories-page/categories-page.component';
import { CategoryMealsComponent } from './category-meals/category-meals.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MealPageComponent } from './meal-page/meal-page.component';

const routes: Routes = [
  {
    path: "", component: LandingPageComponent
  },
  {
    path: "categories", component: ToolbarComponent,
    children: [
      { path: "", component: CategoriesPageComponent },
      { path: ":category", component: CategoryMealsComponent },
      { path: ":category/:meal", component: MealPageComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
