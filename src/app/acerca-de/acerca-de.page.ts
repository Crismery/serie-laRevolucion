import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.page.html',
  styleUrls: ['./acerca-de.page.scss'],
})
export class AcercaDePage implements OnInit {

  constructor() { }

  serieInfo = {
    title: 'La revolucion',
    seasons: '8 capitlos, una temporada', // Número de temporadas
    creator: 'Aurelien Molas',
    Genero:'De francia, Series sobre politica, Serie dramatica.',
    titulo:'Violento de terror.',
    Descripcion:'En esta reversion de la historia, una enigmatica enfermedad asola la francia del siglo XVIII y origina una confrontacion brutal entre los rebeldes y la aristocracia.'
  };
  ngOnInit() {
  }

}
