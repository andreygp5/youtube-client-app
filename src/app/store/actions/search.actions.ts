import { createAction, props } from '@ngrx/store';
import { ISortSettings } from '../../shared/models/interfaces/sort.settings.interface';

export const searchProcessInput = createAction(
  '[Search] Process Input',
  props<{ input: string }>(),
);

export const searchSetInput = createAction(
  '[Search] Set Input',
  props<{ input: string }>(),
);

export const searchProcessSortSettings = createAction(
  '[Search] Process Sort Settings',
  props<{ sortSettings: ISortSettings }>(),
);

export const searchSetSortSettings = createAction(
  '[Search] Set Sort Settings',
  props<{ sortSettings: ISortSettings }>(),
);

export const searchSetFilterWord = createAction(
  '[Search] Set Filter Word',
  props<{ filterWord: string }>(),
);
