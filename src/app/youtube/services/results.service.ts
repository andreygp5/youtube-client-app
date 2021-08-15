import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchResultsService } from '../../core/services/search-results.service';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  public resultItems: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);

  constructor(private searchResultsService: SearchResultsService) {
    this.subscribeToSearch();
  }

  private subscribeToSearch(): void {
    this.searchResultsService.searchResults.subscribe((res) => {
      this.resultItems.next(res);
    })
  }
}
