import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

@Injectable({
  providedIn: 'root',
})
export class FilterByWordService {
  public filterWord: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() {
  }

  setWordFilter(newValue: string): void {
    this.filterWord.next(newValue);
  }

  filterByWord(resultItem: IResultItem[]): IResultItem[] {
    return resultItem.filter((item) => item.snippet.title.includes(this.filterWord.value || ''));
  }
}
