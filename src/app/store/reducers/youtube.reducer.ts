import { createReducer, on } from '@ngrx/store';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { youtubeClearVideos, youtubeSetVideos } from '../actions/youtube.actions';

export const youtubeFeatureKey = 'youtube';

export interface YoutubeState {
  videos: IResultItem[],
}

export const initialState: YoutubeState = {
  videos: [],
};


export const youtuberReducer = createReducer(
  initialState,
  on(youtubeSetVideos, (state: YoutubeState, { videos }): YoutubeState => {
    return {
      ...state,
      videos,
    };
  }),
  on(youtubeClearVideos, (state: YoutubeState): YoutubeState => {
    return {
      ...state,
      videos: [],
    };
  }),
);

