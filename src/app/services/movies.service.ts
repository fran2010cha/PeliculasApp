import { RespuestaMDB } from './../interfaces/interfaces';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) {}


    getFeature() {
      // tslint:disable-next-line: max-line-length
      return this.http.get<RespuestaMDB>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2019-09-15&primary_release_date.lte=2020-02-22&api_key=478e54084f7edf62fd6ceafab2bc2f31&language=es&include_image_language=es`);
    }

}
