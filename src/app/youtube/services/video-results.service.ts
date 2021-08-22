import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { AuthService } from '../../auth/services/auth.service';
import { YoutubeSearchService } from './youtube-search.service';
import { SearchValuesService } from '../../core/services/search-values.service';
import { SortNameEnum } from '../../shared/models/enums/sort.name.enum';

@Injectable({
  providedIn: 'root',
})
export class VideoResultsService {
  public videosList: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);
  private modifiedSearchInput: string = '';

  constructor(
    private youtubeSearchService: YoutubeSearchService,
    private router: Router,
    private authService: AuthService,
    private searchValuesService: SearchValuesService,
  ) {
    this.subscribeToLoggingIn();
    this.subscribeToSearchInput();
    this.subscribeToSortSettings();
  }

  private setVideosList(searchInputValue: string, sortSettings: SortNameEnum | undefined): void {
    this.youtubeSearchService.getVideosList(searchInputValue, sortSettings)
      .subscribe((res) => {
        this.videosList.next(res);
      });
  }

  private subscribeToSortSettings(): void {
    this.searchValuesService.sortSettings
      .subscribe((newSortSettings) => {
        if (newSortSettings && this.modifiedSearchInput) {
          this.setVideosList(this.modifiedSearchInput, newSortSettings.sortName);
        }
      });
  }

  private subscribeToSearchInput(): void {
    this.searchValuesService.searchInput
      .pipe(
        debounceTime(300),
        tap((searchInputValue) => {
          if (searchInputValue === '') {
            this.videosList.next([]);
          }
          return searchInputValue;
        }),
        filter((searchInputValue) => searchInputValue !== ''),
        distinctUntilChanged(),
        map((searchInputValue) => searchInputValue.replace(/\s/, '+')),
      )
      .subscribe(searchInputValue => {
        this.modifiedSearchInput = searchInputValue;
        this.setVideosList(searchInputValue, this.searchValuesService.sortSettings.value?.sortName);
      });
  }

  private subscribeToLoggingIn(): void {
    this.authService.isLoggedIn.subscribe((res) => {
      if (!res) {
        this.videosList.next([]);
      }
    });
  }
}
