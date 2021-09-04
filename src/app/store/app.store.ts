import { youtubeFeatureKey, youtuberReducer, YoutubeState } from './reducers/youtube.reducer';
import { searchFeatureKey, searchReducer, SearchState } from './reducers/search.reducer';
import { customVideosFeatureKey, customVideosReducer, CustomVideosState } from './reducers/custom-videos.reducer';

export interface State {
  youtube: YoutubeState;
  customVideos: CustomVideosState;
  search: SearchState;
}

export const reducers = {
  [youtubeFeatureKey]: youtuberReducer,
  [searchFeatureKey]: searchReducer,
  [customVideosFeatureKey]: customVideosReducer,
};
