import { createReducer, on } from '@ngrx/store';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { customVideosSetVideos } from '../actions/custom-videos.actions';


export const customVideosFeatureKey = 'customVideos';

export interface CustomVideosState {
  videos: IResultItem[];
}

export const initialState: CustomVideosState = {
  videos: [],
};


export const customVideosReducer = createReducer(
  initialState,
  on(customVideosSetVideos, (state: CustomVideosState, { customVideos }): CustomVideosState => {
    return {
      ...state,
      videos: [...state.videos, ...customVideos],
    };
  }),
);

