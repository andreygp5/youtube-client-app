import { createReducer, on } from '@ngrx/store';
import { ISortSettings } from '../../shared/models/interfaces/sort.settings.interface';
import { searchSetFilterWord, searchSetInput, searchSetSortSettings } from '../actions/search.actions';

export const searchFeatureKey = 'search';

export interface SearchState {
  input: string;
  sortSettings: ISortSettings | null;
  filterWord: string;
}

export const initialState: SearchState = {
  input: '',
  sortSettings: null,
  filterWord: '',
};


export const searchReducer = createReducer(
  initialState,
  on(searchSetInput, (state: SearchState, { input }) => {
    return {
      ...state,
      input,
    };
  }),
  on(searchSetSortSettings, (state: SearchState, { sortSettings }) => {
    return {
      ...state,
      sortSettings,
    };
  }),
  on(searchSetFilterWord, (state: SearchState, { filterWord }) => {
    return {
      ...state,
      filterWord,
    };
  }),
);
