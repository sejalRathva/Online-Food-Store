import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FoodService } from 'src/app/core/Services/Food/food.service';
import { Food } from 'src/app/Shared/Models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(
    private foodService: FoodService,
    activatedRoute: ActivatedRoute
  ) {
    let foodsObservalbe: Observable<Food[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
        foodsObservalbe = this.foodService.getAllFoodsBySearchTerm(
          params.searchTerm
        );
      else if (params.tag)
        foodsObservalbe = this.foodService.getAllFoodsByTag(params.tag);
      else foodsObservalbe = foodService.getAll();

      foodsObservalbe.subscribe((serverFoods) => {
        this.foods = serverFoods;
      });
    });
  }
}
