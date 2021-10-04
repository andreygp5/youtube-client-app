import { SortNameEnum } from '../enums/sort.name.enum';
import { IResultItem } from './result.item.inteface';

export interface IYoutubeParamsForList {
  q: string;
  order?: SortNameEnum;
  maxResults: number;
  type: 'video';
}

export interface IYoutubeParamsForVideo {
  part: 'snippet,statistics';
  id: IResultItem['id'];
}
