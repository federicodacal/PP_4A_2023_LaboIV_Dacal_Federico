import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit{

  perfilGithub?:any;
  loading:boolean = true;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://api.github.com/users/federicodacal').subscribe((res:any) => {
      this.perfilGithub = res;

      this.loading = false;
    });
  }
}
