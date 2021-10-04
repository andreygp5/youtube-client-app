import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {

  transform(text: string, maxLetters: number): string {
    return text.length > maxLetters ? `${text.slice(0, maxLetters)}...` : text;
  }
}
