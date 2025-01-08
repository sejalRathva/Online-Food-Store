import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  FOOD_BY_ID_URL,
  FOODS_BY_SEARCH_URL,
  FOODS_BY_TAG_URL,
  FOODS_TAGS_URL,
  FOODS_URL,
} from 'src/app/Shared/Constant/urls';
import { Food } from 'src/app/Shared/Models/Food';
import { Tag } from 'src/app/Shared/Models/Tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}
  // getAll(): Food[] {
  //   return sample_foods;
  // }
  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOODS_URL);
  }
  getAllFoodsBySearchTerm(searchTerm: string) {
    // return this.getAll().filter((food) =>
    //   food.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    return this.http.get<Food[]>(FOODS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(FOODS_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === 'All'
      ? this.getAll()
      : this.http.get<Food[]>(FOODS_BY_TAG_URL + tag);
  }
  getFoodById(foodId: string): Observable<Food> {
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }
}
