import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterByWordService {
  public filterWord: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  setWordFilter(newValue: string): void {
    this.filterWord.next(newValue);
  }
}
