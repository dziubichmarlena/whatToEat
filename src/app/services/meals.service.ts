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
  favourites: Meal[] = [];

  constructor(private readonly http: HttpClient) { }

  async getRandomMeal(): Promise<Meal[]> {
    return await firstValueFrom(this.http.get<Meal[]>(`${environment.random}`));
  }

  fetchAllCategories() {
    this.http.get<Categories>(`${environment.categories}`)
      .subscribe(x => {
        this.categories$.next(x.categories);

        for (let cat of x.categories) {
          cat._length = 'loading...';

          this.http.get<AllMealsByCategory>(`${environment.mealsByCatagory + cat.strCategory}`)
            .subscribe(y => cat._length = String(y.meals.length));
        }
      });
  }

  async fetchMealsByCategory(category: string | null): Promise<AllMealsByCategory> {
    return await firstValueFrom(this.http.get<AllMealsByCategory>(`${environment.mealsByCatagory + category}`));
  }

  async fetchMeal(id: string | null): Promise<MealDBResponse> {
    return await firstValueFrom(this.http.get<MealDBResponse>(`${environment.meal + id}`));
  }

  addToFavourites(meal: Meal) {
    if(!this.favourites.includes(meal)){
      this.favourites.push(meal);
    }
  }

  getFavourites(){
    return this.favourites;
  }

  removeFromFavourites(meal: Meal){
   let index = this.favourites.indexOf(meal);
   this.favourites.splice(index, 1);
  }
}


export interface Categories {
  categories: Category[];
}

export interface Category {
  strCategory: string,
  strCategoryDescription: string,
  strCategoryThumb: string

  _length: string;
}

export interface AllMealsByCategory {
  meals: MealByCategory[]
}

export interface MealByCategory {
  strMeal: string,
  strMealThumb: string,
  idMeal: string
}

export interface MealDBResponse {
  meals: Meal[];
}

export interface Meal {
  idMeal: string,
  strMeal: string,
  strCategory: string,
  strArea: string,
  strInstructions: string,
  strMealThumb: string,
  strTags: string
}
