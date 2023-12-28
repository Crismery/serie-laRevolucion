import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnMiVidaPage } from './en-mi-vida.page';

const routes: Routes = [
  {
    path: '',
    component: EnMiVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnMiVidaPageRoutingModule {}
