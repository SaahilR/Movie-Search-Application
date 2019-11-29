import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'urlTitle'
})
export class UrlTitlePipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ |\W/g,'');
  }

}
