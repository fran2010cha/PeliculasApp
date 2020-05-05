import { ComponentsModule } from './../components.module';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];
  @Output() cargarMas = new EventEmitter();

  slideOpts = {
    slidesPerVier: 3.3,
    freeMode: true,
    spaceBetween: -1
  };

  constructor() { }

  ngOnInit() {}

  onClick() {
    console.log('cargar mas', this.cargarMas);
    this.cargarMas.emit();
  }

}
