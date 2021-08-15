import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SearchResultsService } from '../../core/services/search-results.service';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  public resultItems: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);

  constructor(private searchResultsService: SearchResultsService, private router: Router) {
    this.subscribeToSearch();
  }

  public getItemById(id: IResultItem['id']): IResultItem | undefined {
    const desiredItem = this.searchResultsService.getResultById(id);

    if (!desiredItem) {
      this.router.navigate(['not-found-page']).then();
    }

    return desiredItem;
  };

  private subscribeToSearch(): void {
    this.searchResultsService.searchResults.subscribe((res) => {
      this.resultItems.next(res);
    });
  }
}
