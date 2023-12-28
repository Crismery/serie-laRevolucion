import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnMiVidaPageRoutingModule } from './en-mi-vida-routing.module';

import { EnMiVidaPage } from './en-mi-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnMiVidaPageRoutingModule
  ],
  declarations: [EnMiVidaPage]
})
export class EnMiVidaPageModule {}
