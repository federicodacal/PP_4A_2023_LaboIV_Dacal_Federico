import { Injectable } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logeado:boolean = false;

  constructor(private authentication:AngularFireAuth) { }

  login(mail:string, password:string) {
    return this.authentication.signInWithEmailAndPassword(mail, password);
  }

  logout() {
    this.logeado = false;
    return this.authentication.signOut();
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

  esAdmin():boolean {
    const authentication = getAuth();
    const user = authentication.currentUser;

    if(user?.email == 'admin@admin.com') {
      return true;
    }
    else {
      return false;
    }
  }
}
