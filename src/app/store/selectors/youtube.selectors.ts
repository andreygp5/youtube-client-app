import { createFeatureSelector, createSelector } from '@ngrx/store';
import { youtubeFeatureKey, YoutubeState } from '../reducers/youtube.reducer';
import { selectCustomVideosState } from './custom-videos.selectors';
import { CustomVideosState } from '../reducers/custom-videos.reducer';

export const selectYoutubeState = createFeatureSelector<YoutubeState>(youtubeFeatureKey);

export const selectYoutubeVideos = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.videos,
);

export const selectAllVideos = createSelector(
  selectYoutubeState,
  selectCustomVideosState,
  (youtubeState: YoutubeState, customVideosState: CustomVideosState) => {
    return [...youtubeState.videos, ...customVideosState.videos];
  },
);
