import { createFeatureSelector, createSelector } from '@ngrx/store';
import { youtubeFeatureKey, YoutubeState } from '../reducers/youtube.reducer';
import { selectCustomVideos } from './custom-videos.selectors';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

export const selectYoutubeState = createFeatureSelector<YoutubeState>(youtubeFeatureKey);

export const selectYoutubeVideos = createSelector(
  selectYoutubeState,
  (state: YoutubeState) => state.videos,
);

export const selectAllVideos = createSelector(
  selectYoutubeVideos,
  selectCustomVideos,
  (youtubeVideos: IResultItem[], customVideos: IResultItem[]) => {
    return [...youtubeVideos, ...customVideos];
  },
);

export const selectVideoById = (videoId: string) => createSelector(
  selectAllVideos,
  (videos: IResultItem[]) => {
    return videos.find((video) => video.id === videoId);
  },
);
