import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { SearchResultsService } from '../../core/services/search-results.service';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { AuthService } from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ResultsService {
  public resultItems: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);

  constructor(
    private searchResultsService: SearchResultsService,
    private router: Router,
    private authService: AuthService,
  ) {
    this.subscribeToSearch();
    this.subscribeToLoggingIn();
  }

  public getItemById(id: IResultItem['id']): IResultItem | undefined {
    const desiredItem = this.searchResultsService.getResultById(id);

    if (!desiredItem) {
      this.router.navigate(['not-found-page']);
    }

    return desiredItem;
  };

  private subscribeToSearch(): void {
    this.searchResultsService.searchResults.subscribe((res) => {
      this.resultItems.next(res);
    });
  }

  private subscribeToLoggingIn(): void {
    this.authService.isLoggedIn.subscribe((res) => {
      if (!res) {
        this.resultItems.next([]);
      }
    });
  }
}
