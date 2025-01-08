import { Component } from '@angular/core';
import { CartPageService } from 'src/app/core/Services/Cart/cart-page.service';
import { Cart } from 'src/app/Shared/Models/Cart';
import { CartItem } from 'src/app/Shared/Models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart!: Cart;
  constructor(private cartService: CartPageService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    });
  }
  removeFromCart(cartItem: CartItem) {
    this.cartService.removeFromCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
