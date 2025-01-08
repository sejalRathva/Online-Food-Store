import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SharedModule } from './Shared/shared.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Pages/home/home.component';
import { SearchComponent } from './Components/Partials/search/search.component';
import { FoodComponent } from './Components/Pages/food/food.component';
import { TagsComponent } from './Components/Partials/tags/tags.component';
import { CartComponent } from './Components/Pages/cart/cart.component';
import { TitleComponent } from './Components/Partials/title/title.component';
import { NotFoundComponent } from './Components/Partials/not-found/not-found.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Components/Pages/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { RagisterComponent } from './Components/Pages/ragister/ragister.component';
import { LoadingComponent } from './Components/Partials/loading/loading.component';
import { CheckoutPageComponent } from './Components/Pages/checkout-page/checkout-page.component';
import { OrderItemsListComponent } from './Components/Partials/order-items-list/order-items-list.component';
import { MapComponent } from './Components/Partials/map/map.component';
import { AuthInterceptor } from './Auth/auth.interceptor';
import { PaymentPageComponent } from './Components/Pages/payment-page/payment-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FoodComponent,
    TagsComponent,
    CartComponent,
    TitleComponent,
    NotFoundComponent,
    LoginComponent,
    RagisterComponent,
    LoadingComponent,
    CheckoutPageComponent,
    OrderItemsListComponent,
    MapComponent,
    PaymentPageComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    ToastrModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      newestOnTop: false,
    }),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
