import { IResultItemStats } from './result.item.stats.interface';
import { IResultItemThumbnails } from './result.item.thumbnails.interface';

export interface IResultItem {
  id: string;

  title: string;
  description: string;

  publishedAt: string;

  stats: IResultItemStats;
  thumbnails: IResultItemThumbnails;
}
