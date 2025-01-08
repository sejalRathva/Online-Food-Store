import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartPageService } from 'src/app/core/Services/Cart/cart-page.service';
import { FoodService } from 'src/app/core/Services/Food/food.service';
import { Food } from 'src/app/Shared/Models/Food';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})
export class FoodComponent {
  food!: Food;
  constructor(
    activatedRoute: ActivatedRoute,
    foodService: FoodService,
    private cartService: CartPageService,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      foodService.getFoodById(params.id).subscribe((serverFood) => {
        this.food = serverFood;
      });
    });
  }

  addToCart() {
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart');
  }
}
