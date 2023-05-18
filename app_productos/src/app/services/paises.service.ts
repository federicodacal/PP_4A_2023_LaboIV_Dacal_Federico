import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  traerPaises() {
    return this.http.get<any[]>('https://restcountries.com/v3.1/subregion/South America');
  }
}
