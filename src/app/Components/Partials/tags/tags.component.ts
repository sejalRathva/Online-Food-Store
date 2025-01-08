import { Component } from '@angular/core';
import { FoodService } from 'src/app/core/Services/Food/food.service';
import { Tag } from 'src/app/Shared/Models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe((serverTags) => {
      this.tags = serverTags;
    });
  }
}
