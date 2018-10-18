import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
/*import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public flashMessage: FlashMessagesService

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
  .then( (res) => {
    this.flashMessage.show('Usuario creado.', 
      {cssClass: 'alert-success', timeOut: 4000});
    this.router.navigate(['/timeline']);
  }).catch((err) => {
    this.flashMessage.show('Usuario no logueado.', 
      {cssClass: 'alert-danger', timeOut: 5000});
    this.router.navigate(['/login'])
  });
};*/