import { createAction, props } from '@ngrx/store';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { ICustomVideo } from '../../shared/models/interfaces/custom.video.interface';

export const customVideosProcessVideos = createAction(
  '[Custom Videos] Process Videos',
  props<{ customVideos: ICustomVideo[] }>()
);

export const customVideosSetVideos = createAction(
  '[Custom Videos] Set Videos',
  props<{ customVideos: IResultItem[] }>()
);
