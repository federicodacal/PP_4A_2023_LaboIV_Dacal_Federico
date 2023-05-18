import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  statusLog:boolean = false;

  constructor(private auth:AuthService) { }

  logout() {
    this.auth.logeado = false;
    this.statusLog = false;
    this.auth.logout().then(() => {
      Swal.fire('Logout');
    });
  }

  ngOnInit(): void {
    this.statusLog = this.auth.logeado;
    console.info('status', this.statusLog);
  }
}



