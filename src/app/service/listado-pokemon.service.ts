import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ListadoPokemonService {

  constructor(private http: HttpClient) { }

  //funcion que reciba la informacion de la API  
  getData(url){
    return this.http.get(`${url}`);
  }

  
}
