import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user:string|undefined;
  password:string|undefined;
  loginIcon:string = 'https://icons-for-free.com/iconfiles/ico/256/home+page+profile+user+icon-1320184041392976124.ico';

  constructor(private auth:AuthService, private router:Router) { }

  ingresar() {
    if(this.user != null && this.password != null) { 
      this.auth.login(this.user, this.password)
      .then(() => {
        Swal.fire(
          'Bienvenido!',
          'Sesión iniciada',
          'success'
          );
          this.auth.logeado = true;
          this.router.navigate(['/bienvenido']);
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Campos incorrectos',
          });
        });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Faltaron completar campos!',
      });
    }
  }

  onChange(value:any) {
    if(value.target.value === 'admin') {
      this.user = 'admin@admin.com';
      this.password = '654321';
    }
    else {
      this.user = 'empleado@empleado.com';
      this.password = '123456';
    }
  }

}
