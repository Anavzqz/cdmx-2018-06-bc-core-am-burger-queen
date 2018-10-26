import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './componentes/log-in/log-in.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AdditionalComponent } from './componentes/additional/additional.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ResetPaswordComponent } from './componentes/reset-pasword/reset-pasword.component';


const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'navbar', component: NavbarComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'additional', component:AdditionalComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'reset-password', component: ResetPaswordComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [
      RouterModule
    ]
})
export class AppRoutingModule { }
