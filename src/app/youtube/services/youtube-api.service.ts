import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { SortNameEnum } from '../../shared/models/enums/sort.name.enum';
import { IYoutubeParamsForList, IYoutubeParamsForVideo } from '../../shared/models/interfaces/youtube.params.interface';
import { IPartialResults } from '../../shared/models/interfaces/initial.results.interface';
import { IFullResultItemInterface } from '../../shared/models/interfaces/full.result.item.interface';
import { ITEMS_PER_PAGE } from '../../core/constants/youtube';
import { HttpHelperService } from '../../core/services/http-helper.service';

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  constructor(
    private http: HttpClient,
    private httpHelper: HttpHelperService,
  ) {
  }

  public getVideosList(q: string, order: SortNameEnum | undefined): Observable<IResultItem[]> {
    return this.http.get<IPartialResults>(`search`, {
      params: this.getParamsForPartialList(q, order),
    })
      .pipe(
        switchMap((res) => {
          const ids: IResultItem['id'][] = res.items.map((video) => video.id.videoId);
          return this.getFullVideosList(ids);
        }),
      );
  }

  private getFullVideosList(ids: IResultItem['id'][]): Observable<IResultItem[]> {
    return this.http.get<IFullResultItemInterface>(`videos`, {
      params: this.getParamsForFullVideosList(ids),
    })
      .pipe(
        map((res) => res.items),
      );
  }

  private getParamsForFullVideosList(ids: IResultItem['id'][]): HttpParams {
    const paramsObj: IYoutubeParamsForVideo = {
      part: 'snippet,statistics',
      id: ids.join(),
    };

    return this.httpHelper.getHttpParams(paramsObj as unknown as { [key: string]: string | number });
  }

  private getParamsForPartialList(q: string, order: SortNameEnum | undefined): HttpParams {
    const paramsObj: IYoutubeParamsForList = {
      q,
      maxResults: ITEMS_PER_PAGE,
      type: 'video',
    };

    if (order) {
      paramsObj.order = order;
    }

    return this.httpHelper.getHttpParams(paramsObj as unknown as { [key: string]: string | number });
  }
}
