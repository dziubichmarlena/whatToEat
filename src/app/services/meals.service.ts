import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {

  constructor(private readonly http: HttpClient) { }

  async getRandomMeal(){
    return await firstValueFrom(this.http.get("https://www.themealdb.com/api/json/v1/1/random.php"));
  }
}
