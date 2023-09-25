import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { LoginComponent } from './componentes/login/login.component';
import { Error404Component } from './componentes/error404/error404.component';

const routes: Routes = [
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "bienvenido",
    component: BienvenidoComponent
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path:"**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
