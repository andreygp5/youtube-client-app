import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { concatMap, debounceTime, distinctUntilChanged, filter, map, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import {
  searchProcessInput,
  searchProcessSortSettings,
  searchSetInput,
  searchSetSortSettings,
} from '../actions/search.actions';
import { youtubeLoadVideos } from '../actions/youtube.actions';
import { selectSearchInput, selectSortName } from '../selectors/search.selectors';


@Injectable()
export class SearchEffects {
  processInput$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(searchProcessInput),
          debounceTime(300),
          map((action) => action.input.replace(/\s/, '+')),
          filter((input) => input !== ''),
          distinctUntilChanged(),
          withLatestFrom(this.store.select(selectSortName)),
          concatMap(([searchInputValue, sortName]) => {
            return [
              searchSetInput({ input: searchInputValue }),
              youtubeLoadVideos({ searchInputValue, sortSettings: sortName }),
            ];
          }),
        );
    },
  );

  processSortSettings$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(searchProcessSortSettings),
          distinctUntilChanged(),
          map((action) => action.sortSettings),
          withLatestFrom(this.store.select(selectSearchInput)),
          concatMap(([sortSettings, searchInputValue]) => {
            return [
              searchSetSortSettings({ sortSettings }),
              youtubeLoadVideos({ searchInputValue, sortSettings: sortSettings?.sortName }),
            ];
          }),
        );
    },
  );

  constructor(
    private actions$: Actions,
    private store: Store,
  ) {
  }
}
