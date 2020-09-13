import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccoutDetailsPageRoutingModule } from './accout-details-routing.module';

import { AccoutDetailsPage } from './accout-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccoutDetailsPageRoutingModule
  ],
  declarations: [AccoutDetailsPage]
})
export class AccoutDetailsPageModule {}
