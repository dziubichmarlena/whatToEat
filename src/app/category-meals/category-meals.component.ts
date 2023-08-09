import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealByCategory, MealsService } from '../services/meals.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-category-meals',
  templateUrl: './category-meals.component.html',
  styleUrls: ['./category-meals.component.css']
})
export class CategoryMealsComponent implements OnInit {
  displayedColumns: string[] = ['strMealThumb', 'strMeal'];
  dataSource!: MatTableDataSource<MealByCategory>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  category: string | null = null;
  mealsByCategory: MealByCategory[] = [];

  constructor(private route: ActivatedRoute, public mealsService: MealsService) { }

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category');
    this.mealsByCategory = (await this.mealsService.fetchMealsByCategory(this.category)).meals;
    this.dataSource = new MatTableDataSource(this.mealsByCategory);
    this.dataSource.paginator = this.paginator;
    const paginatorIntl = this.paginator._intl;
    paginatorIntl.nextPageLabel = '';
    paginatorIntl.previousPageLabel = '';
    paginatorIntl.lastPageLabel = '';
    paginatorIntl.firstPageLabel = '';
  }
}
