import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { LoginComponent } from './Components/Pages/login/login.component';
import { RagisterComponent } from './Components/Pages/ragister/ragister.component';
import { CheckoutPageComponent } from './Components/Pages/checkout-page/checkout-page.component';
import { authGuard } from './Auth/auth.guard';
import { PaymentPageComponent } from './Components/Pages/payment-page/payment-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  { path: 'food/:id', component: FoodComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RagisterComponent },
  {
    path: 'checkout',
    component: CheckoutPageComponent,
    canActivate: [authGuard],
  },
  {
    path: 'payment',
    component: PaymentPageComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
