import { createAction, props } from '@ngrx/store';
import { SortNameEnum } from '../../shared/models/enums/sort.name.enum';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

export const youtubeLoadVideos = createAction(
  '[Youtube] Load Videos',
  props<{ searchInputValue: string, sortSettings: SortNameEnum | undefined }>(),
);

export const youtubeSetVideos = createAction(
  '[Youtube] Set Videos',
  props<{ videos: IResultItem[] }>(),
);

export const youtubeLoadVideosError = createAction(
  '[Youtube] Load Videos Error',
);

export const youtubeClearVideos = createAction(
  '[Youtube] Clear Videos',
);
