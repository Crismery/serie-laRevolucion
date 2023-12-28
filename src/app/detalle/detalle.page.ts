import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  momento: any = [
    {
      titulo: 'Episodio 1: Los origenes',
      descripcion: 'Madeleine le relata sus espeluznantes visones a Elise. el encuentro de Joseph y Oka, un prisionero, revela algo desconcertante.',
      videoUrl: 'assets/videoepisodio1.mp4'
    },
    {
      titulo: 'Episodio 6: La alianza',
      descripcion: 'Joseph y Katell son victimas del siniestro plan de Donatien. Charles le ordena a perouse dar con el paradero de Elise y Lariboise.',
      videoUrl: 'assets/videoepisodio6.mp4'
    },
    {
      titulo: 'Episodio 8: La rebelion',
      descripcion: 'Ophelie vislumbra el estremecedor poder de Madeleine. Oka y Albert se distancian, y Elise enfrenta una traicion.',
      videoUrl: 'assets/videoepisodio8.mp4'
    }
  ];
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params && params['momento']) { 
        this.momento = params['momento']; 
      }
    });
  }
  ngOnInit() {
  }

}
