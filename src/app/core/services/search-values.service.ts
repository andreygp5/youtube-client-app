import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISortSettings } from '../../shared/models/interfaces/sort.settings.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchValuesService {
  public searchInput: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public sortSettings: BehaviorSubject<ISortSettings | null> = new BehaviorSubject<ISortSettings | null>(null);
  public filterWord: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor() {
  }

  public setSearchInput(newInput: string): void {
    this.searchInput.next(newInput);
  }

  public setSortSettings(newSortSettings: ISortSettings): void {
    this.sortSettings.next(newSortSettings);
  }

  setFilterWord(newFilterWord: string): void {
    this.filterWord.next(newFilterWord);
  }
}
