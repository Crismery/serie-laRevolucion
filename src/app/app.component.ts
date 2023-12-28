import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Portada', url: '/portada', icon: 'easel' },
    { title: 'Personajes', url: '/personajes', icon: 'people' },
    { title: 'Momentos', url: '/momentos', icon: 'heart' },
    { title: 'Acerca de', url: '/acerca-de', icon: 'person-circle' },
    { title: 'En mi vida', url: '/en-mi-vida', icon: 'book' },
    { title: 'Contratame', url: '/contratame', icon: 'call' },
  ];
 // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
