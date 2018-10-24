import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  ) { }

   resetPassword(email: string) {
    let auth = firebase.auth();
    return auth.sendPasswordResetEmail(email)
      .then(() => alert("Se ha enviado un link a tu correo para cambiar la contraseña"))
      .catch((error) => console.log(error))
  }

  loginEmail(email: string, password: string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then( userData  => resolve(userData),
      err => reject (err));
    });
  }

  getAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }
  
  logout(){
    return this.afAuth.auth.signOut();
  }
}

