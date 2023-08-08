import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  meals$ = new BehaviorSubject<Meal[]>([]);
  categories$ = new BehaviorSubject<Category[]>([]);

  constructor(private readonly http: HttpClient) { }

  async getRandomMeal(): Promise<Meal[]>{
    return await firstValueFrom(this.http.get<Meal[]>(`${environment.random}`));
  }

  fetchAllCategories(){
    this.http.get<Categories>(`${environment.categories}`)
      .subscribe(x => {
        this.categories$.next(x.categories);

        for(let cat of x.categories){
          cat._length = 'loading...';

          this.http.get<CategoryMeals>(`${environment.mealsByCatagory + cat.strCategory}`)
            .subscribe(y => cat._length = String(y.meals.length));
        }
      });
  }
}


export interface Categories{
  categories: Category[];
}

export interface Category{
  strCategory: string, 
  strCategoryDescription: string, 
  strCategoryThumb: string

  _length: string;
}

export interface CategoryMeals{
  meals: CategoryMeal[]
}

export interface CategoryMeal{
  strMeal: string, 
  strMealThumb: string, 
  idMeal: string
}

export interface Kitchen{
  meals: Meal[];
}

export interface Meal{
  idMeal: string, 
  strMeal: string, 
  strCategory: string, 
  strInstructions: string, 
  strMealThumb: string, 
  strTags: string
}