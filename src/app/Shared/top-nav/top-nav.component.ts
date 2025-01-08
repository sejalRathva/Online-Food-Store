import { Component } from '@angular/core';
import { User } from '../Models/user';
import { CartPageService } from 'src/app/core/Services/Cart/cart-page.service';
import { UserService } from 'src/app/core/Services/User/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
})
export class TopNavComponent {
  user!: User;
  cartQuantity = 0;
  constructor(
    cartService: CartPageService,
    private userService: UserService,
    private router: Router
  ) {
    cartService.getCartObservable().subscribe((newCart) => {
      this.cartQuantity = newCart.totalCount;
    });
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
  get isAuth() {
    return this.user.token;
  }
}
