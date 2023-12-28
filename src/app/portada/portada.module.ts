import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PortadaPageRoutingModule } from './portada-routing.module';

import { PortadaPage } from './portada.page';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PortadaPageRoutingModule,
    SlickCarouselModule,
  ],
  declarations: [PortadaPage]
})
export class PortadaPageModule {}
