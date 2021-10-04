import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import { customVideosProcessVideos, customVideosSetVideos } from '../actions/custom-videos.actions';
import { CustomVideoConverterService } from '../../admin/services/custom-video-converter.service';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';


@Injectable()
export class CustomVideosEffects {
  processCustomVideos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(customVideosProcessVideos),
      map((action): IResultItem[] => {
        return action.customVideos.map((customVideo => {
          return this.customVideoConverterService.convertCustomVideoToResultVideo((customVideo));
        }));
      }),
      map((customVideos: IResultItem[]) => customVideosSetVideos({ customVideos })),
    );
  });

  constructor(
    private actions$: Actions,
    private customVideoConverterService: CustomVideoConverterService,
  ) {
  }
}
