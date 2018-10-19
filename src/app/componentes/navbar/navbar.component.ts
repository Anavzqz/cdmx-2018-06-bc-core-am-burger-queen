import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public userName: string;
  public userEmail: string;

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
  
  }

  onCheckUserLogin(){
    this.authService.getAuth().subscribe( auth => {
      if (auth) {
        this.isLogin = true;
        this.userName = auth.displayName;
        this.userEmail = auth.email;
        //this.userPicture = auth.photoUrl;
        //this.userId = auth.uid;
      } else {
        this.isLogin = false;
      }
    })
  }

  onClickLogout(){
    this.authService.logout();
  }
}
