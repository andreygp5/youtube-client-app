import { createFeatureSelector, createSelector } from '@ngrx/store';
import { customVideosFeatureKey, CustomVideosState } from '../reducers/custom-videos.reducer';

export const selectCustomVideosState = createFeatureSelector<CustomVideosState>(customVideosFeatureKey);

export const selectCustomVideos = createSelector(
  selectCustomVideosState,
  (state: CustomVideosState) => state.videos,
);
