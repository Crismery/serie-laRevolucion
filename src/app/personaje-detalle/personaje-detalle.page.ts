import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-personaje-detalle',
  templateUrl: './personaje-detalle.page.html',
  styleUrls: ['./personaje-detalle.page.scss'],
})
export class PersonajeDetallePage {
  nombre: string = "";
  foto: string = "";
  detalles: string = "";

  personajeNombre: string = "";

  personajes = [
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

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.personajeNombre = params['nombre'];
      const personaje = this.personajes.find(p => p.nombre === this.personajeNombre);
      if (personaje) {
        this.foto = personaje.foto;
        this.nombre = personaje.nombre;
        this.detalles = personaje.detalles;
      }
    });
  }
}

