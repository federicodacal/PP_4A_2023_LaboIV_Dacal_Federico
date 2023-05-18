import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth:AngularFireAuth) { }

  login(mail:string, password:string) {
    return this.auth.signInWithEmailAndPassword(mail, password);
  }

  logout() {
    return this.auth.signOut();
  }

  log():boolean {
    const authentication = getAuth();
    const user = authentication.currentUser;

    if(user) {
      return true;
    }
    else {
      return false;
    }
  }
}
