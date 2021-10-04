import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchSetFilterWord } from '../../../../../store/actions/search.actions';

@Component({
  selector: 'app-filter-by-word',
  templateUrl: './filter-by-word.component.html',
  styleUrls: ['./filter-by-word.component.scss'],
})
export class FilterByWordComponent {
  public filterWordInput: string = '';

  constructor(private store: Store) {
  }

  public onFilterWordChange(): void {
    this.store.dispatch(searchSetFilterWord({ filterWord: this.filterWordInput }))
  }
}
