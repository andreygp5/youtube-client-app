import { youtubeFeatureKey, youtuberReducer, YoutubeState } from './reducers/youtube.reducer';
import { searchFeatureKey, searchReducer, SearchState } from './reducers/search.reducer';

export interface State {
  youtube: YoutubeState;
  search: SearchState;
}

export const reducers = {
  [youtubeFeatureKey]: youtuberReducer,
  [searchFeatureKey]: searchReducer,
};
