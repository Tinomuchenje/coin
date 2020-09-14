import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { LogoComponent } from './logo/logo.component';
import { StartComponent } from './start/start.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [SlidesComponent, LogoComponent, StartComponent],
  exports: [SlidesComponent, LogoComponent, StartComponent]
})
export class ComponentsModule { }
