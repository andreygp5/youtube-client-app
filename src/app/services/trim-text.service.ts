import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TrimTextService {

  constructor() {
  }

  trimText(text: string, maxLetters: number) {
    return text.length > maxLetters ? `${text.slice(0, maxLetters)}...` : text;
  }
}