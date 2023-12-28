import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PersonajesPage } from './personajes/personajes.page';
import { PersonajeDetallePage } from './personaje-detalle/personaje-detalle.page';




const routes: Routes = [
  {
    path: '',
    redirectTo: '/portada',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'momentos',
    loadChildren: () => import('./momentos/momentos.module').then( m => m.MomentosPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'en-mi-vida',
    loadChildren: () => import('./en-mi-vida/en-mi-vida.module').then( m => m.EnMiVidaPageModule)
  },
  {
    path: 'contratame',
    loadChildren: () => import('./contratame/contratame.module').then( m => m.ContratamePageModule)
  },
  {
    path: 'portada',
    loadChildren: () => import('./portada/portada.module').then( m => m.PortadaPageModule)
  },
  {
    path: 'personajes',
    loadChildren: () => import('./personajes/personajes.module').then( m => m.PersonajesPageModule)
  },
  {
    path: 'personaje-detalle',
    loadChildren: () => import('./personaje-detalle/personaje-detalle.module').then( m => m.PersonajeDetallePageModule)
  },

  { path: '', redirectTo: 'personajes', pathMatch: 'full' },
  { path: 'personajes', component: PersonajesPage },
  { path: 'personajes/detalle/:nombre', component: PersonajeDetallePage },
    {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
