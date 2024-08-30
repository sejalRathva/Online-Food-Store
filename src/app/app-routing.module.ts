import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "home",
    loadChildren: () => import("../app/Home/home/home.module").then((m) => m.HomeModule),
  },{
    path: "",
    redirectTo: "home",
     pathMatch: 'full'
},
  {
    path: "auth",
    loadChildren: () => import("../app/Auth/authentication/authentication.module").then((m) => m.AuthenticationModule),
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
