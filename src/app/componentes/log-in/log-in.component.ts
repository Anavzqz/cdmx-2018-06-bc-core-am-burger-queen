import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
//import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }



  //public flashMessage: FlashMessagesService

onSubmitLogin() {
  this.authService.loginEmail(this.email, this.password)
  .then( (res) => {
    this.router.navigate(['/navbar']);
  }).catch((err) => {
    console.log('error');
    
  });
};
}