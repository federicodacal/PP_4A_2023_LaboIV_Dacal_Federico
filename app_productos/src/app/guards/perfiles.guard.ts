import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PerfilesGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.esAdmin()) {    
        return true;
       }
       else {
        Swal.fire({
          icon: 'warning',
          title: 'No tiene permisos',
          showConfirmButton: false,
          timer: 2000
        });
        this.router.navigate(['/bienvenido']);
        return false;
       }
  }
  
}
