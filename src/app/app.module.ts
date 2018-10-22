import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LogInComponent } from './componentes/log-in/log-in.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { BreakfastComponent } from './componentes/breakfast/breakfast.component';
import { DinnerComponent } from './componentes/dinner/dinner.component';
import { AdditionalComponent } from './componentes/additional/additional.component';
import { RegisterComponent } from './componentes/register/register.component';

import { AuthService } from './services/auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { MenuComponent } from './componentes/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    NavbarComponent,
    BreakfastComponent,
    DinnerComponent,
    AdditionalComponent,
    RegisterComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
