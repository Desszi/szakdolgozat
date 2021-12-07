import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: null | any[], phrase: string, fkey: string): any[] | null {

    if (fkey) {
      if (!Array.isArray(value) || !phrase || !fkey) {
        return value;
      }

      phrase = ('' + phrase).toLowerCase();

      return value.filter(item => {
        const strItem: string = ('' + item[fkey]).toLowerCase();
        return strItem.includes(phrase);
      });

    }

    else {
      if (!Array.isArray(value) || !phrase) {
        return value;
      }

      phrase = ('' + phrase).toLowerCase();
      return value.filter(
        item => JSON.stringify(item).toLowerCase().includes(phrase)
      );
    }
  }

}
