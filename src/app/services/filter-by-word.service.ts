import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../interfaces/result.item.inteface';

@Injectable({
  providedIn: 'root',
})
export class FilterByWordService {
  filterWord: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
  }

  setWordFilter(newValue: string) {
    this.filterWord.next(newValue);
  }

  filterByWord(resultItem: IResultItem[]) {
    return resultItem.filter((item) => item.snippet.title.includes(this.filterWord.value));
  }
}
