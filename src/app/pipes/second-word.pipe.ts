import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondWord'
})
export class SecondWordPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) {
      return '';
    } else{
      return value.split(':')[1];
    }
  }

}
