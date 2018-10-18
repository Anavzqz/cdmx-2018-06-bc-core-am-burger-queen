import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './componentes/log-in/log-in.component';
import { BreakfastComponent } from './componentes/breakfast/breakfast.component';
import { DinnerComponent } from './componentes/dinner/dinner.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AdditionalComponent } from './componentes/additional/additional.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'breakfast', component: BreakfastComponent},
  {path: 'dinner', component: DinnerComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'additional', component:AdditionalComponent}
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
