import { createFeatureSelector, createSelector } from '@ngrx/store';
import { youtubeFeatureKey, YoutubeState } from '../reducers/youtube.reducer';

export const selectYoutubeState = createFeatureSelector<YoutubeState>(youtubeFeatureKey);

export const selectYoutubeVideos = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.videos,
);
