import { environment } from './../../environments/environment';
import { Pipe, PipeTransform } from '@angular/core';

const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img: string, size: string = 'w500'): string {
    if ( !img ) {
      return './assets/original.jpg';
    }
    const imgUrl = `${URL}/${ size }/${ img }`;
    // console.log('URL', imgUrl);

    return imgUrl;
  }

}
