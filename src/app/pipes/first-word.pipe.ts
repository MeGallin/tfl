import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstWord'
})
export class FirstWordPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('FFFFFF', value);
    if (!value) {
      return '';
    } else {
      return value.split(':')[0];
    }
  }
}
