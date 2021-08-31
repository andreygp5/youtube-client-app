import { createFeatureSelector, createSelector } from '@ngrx/store';
import { searchFeatureKey, SearchState } from '../reducers/search.reducer';

export const selectSearchState = createFeatureSelector<SearchState>(searchFeatureKey);

export const selectSearchInput = createSelector(
  selectSearchState,
  (state: SearchState) => state.input,
);

export const selectSortSettings = createSelector(
  selectSearchState,
  (state: SearchState) => state.sortSettings,
);

export const selectSortName = createSelector(
  selectSearchState,
  selectSortSettings,
  (_, sortSettings) => sortSettings?.sortName,
);

export const selectSortDirection = createSelector(
  selectSearchState,
  selectSortSettings,
  (_, sortSettings) => sortSettings?.sortDirection,
);

export const selectFilterWord = createSelector(
  selectSearchState,
  (state: SearchState) => state.filterWord,
);
