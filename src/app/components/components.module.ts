import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { PipesModule } from './../pipes/pipes.module';
import { IonicModule } from '@ionic/angular';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowParesComponent } from './slideshow-pares/slideshow-pares.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowParesComponent
  ]
})
export class ComponentsModule { }
