import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';
import { Personaje } from './personajes.module';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage {
  personajes: Personaje[] = [
    {
      nombre: 'Elise de Montargis',
      foto: 'assets/personaje1.jpg',
      detalles: 'La trama sucede en el condado de Montargis, (no lo busquéis porque es ficticio) y enfrenta al conde con su hermano y a sus respectivos hijos. Entre ellos destaca la bella Elise de Montargis (Marilou Aussilloux) que muestra siempre un gran carácter contra sus iguales y no duda en proclamar demandas a favor de la justicia social.',
    },
    {
      nombre: 'Madeleine de Montargis',
      foto: 'assets/personaje2.jpg',
      detalles: 'En esta producción, quien cuenta la historia con su voz en off es Madeleine de Montargis (Amélia Lacquemant), una chica que vive muy de cerca los violentos acontecimientos que arrancan en 1787.',
    },
    {
      nombre: 'Joseph Ignace Guillotin',
      foto: 'assets/personaje3.jpg',
      detalles: 'se centra en la historia de Joseph-Ignace Guillotin, un personaje que quizás no conozcan por ese nombre pero probablemente les resulte más familiar por su asociación a la guillotina.',
    },
  ];

  constructor(private navCtrl: NavController) {}

  mostrarDetalles(personaje: Personaje) {
    this.navCtrl.navigateForward(`/personajes/${personaje.nombre}`);
  }
}

