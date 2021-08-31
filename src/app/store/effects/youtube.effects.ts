import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { youtubeLoadVideos, youtubeLoadVideosError, youtubeSetVideos } from '../actions/youtube.actions';
import { YoutubeApiService } from '../../youtube/services/youtube-api.service';

@Injectable()
export class YoutubeEffects {
  loadVideos$ = createEffect(() => {
      return this.actions$
        .pipe(
          ofType(youtubeLoadVideos),
          mergeMap((action) => this.youtubeSearchService.getVideosList(action.searchInputValue, action.sortSettings)
            .pipe(
              map(videos => youtubeSetVideos({ videos })),
              catchError(() => of(youtubeLoadVideosError)),
            )),
        );
    },
  );

  constructor(
    private actions$: Actions,
    private youtubeSearchService: YoutubeApiService,
  ) {
  }
}
