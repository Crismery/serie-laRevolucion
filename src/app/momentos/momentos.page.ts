import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {
  momentos: any = [
    {
      title: 'Episodio 1: Los origenes',
      photo: 'assets/Episodio1.jpg',
      details: 'Madeleine le relata sus espeluznantes visones a Elise. el encuentro de Joseph y Oka, un prisionero, revela algo desconcertante.',
      episodio: 'Episodio 1: Los origenes', // Agrega el nombre del episodio
    },
    {
      title: 'Episodio 6: La alianza',
      photo: 'assets/Episodio6.jpg',
      details: 'Joseph y Katell son víctimas del siniestro plan de Donatien. Charles le ordena a Perouse dar con el paradero de Elise y Lariboise.',
      episodio: 'Episodio 6: La alianza', // Agrega el nombre del episodio
    },
    {
      title: 'Episodio 8: La rebelion',
      photo: 'assets/Episodio8.jpg',
      details: 'Ophélie vislumbra el estremecedor poder de Madeleine. Oka y Albert se distancian, y Elise enfrenta una traición.',
      episodio: 'Episodio 8: La rebelion', // Agrega el nombre del episodio
    }
  ];

  videos: { episodio: string, videoUrl: string }[] = [
    { episodio: 'Episodio 1: Los origenes', videoUrl: 'assets/videoepisodio1.mp4' },
    { episodio: 'Episodio 6: La alianza', videoUrl: 'assets/videoepisodio6.mp4' },
    { episodio: 'Episodio 8: La rebelion', videoUrl: 'assets/videoepisodio8.mp4' }
    // Agrega más episodios y URL de videos según sea necesario
  ];

  constructor(private router: Router) { }

  mostrarDetalle(momento: any) {
    const videoUrl = this.videos.find(v => v.episodio === momento.episodio)?.videoUrl;
    this.router.navigate(['/detalle', { videoUrl, titulo: momento.title, descripcion: momento.details }]);
  }

  ngOnInit() {
  }
}

