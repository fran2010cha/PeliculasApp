import { Pelicula } from './../../interfaces/interfaces';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculas: Pelicula[] = [];

  slideOpts = {
       slidesPerVier: 1.1,
       freeMode: true
     };
  constructor() { }

  ngOnInit() {}

}
