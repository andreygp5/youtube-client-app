import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';
import { selectAllVideos } from '../../../store/selectors/youtube.selectors';
import { selectFilterWord, selectSortDirection } from '../../../store/selectors/search.selectors';
import { SortDirectionEnum } from '../../../shared/models/enums/sort.direction.enum';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  public videosList$: Observable<IResultItem[]> = this.store.select(selectAllVideos);
  public filterWord$: Observable<string> = this.store.select(selectFilterWord);
  public sortDirection$: Observable<SortDirectionEnum | undefined> = this.store.select(selectSortDirection);

  constructor(private store: Store) {
  }
}
