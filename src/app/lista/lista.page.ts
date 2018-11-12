import { Component, OnInit } from '@angular/core';

import { ListadoPokemonService } from '../service/listado-pokemon.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {
  listado:any;
  nombre ="wilson";
  constructor(private servicio:ListadoPokemonService) { }

  ngOnInit() {
    //cosulta de la API
    this.servicio.getData('https://pokeapi.co/api/v2/pokemon').subscribe(data => {
      console.log(data);
      this.listado=data;
    });
  }

}
