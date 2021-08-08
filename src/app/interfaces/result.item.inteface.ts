import { IResultItemStats } from './result.item.stats.interface';
import { IResultItemThumbnails } from './result.item.thumbnails.interface';

export interface IResultItem {
  id: string;

  snippet: {
    title: string;
    description: string;

    publishedAt: string;

    thumbnails: IResultItemThumbnails;
  };

  statistics: IResultItemStats;
}
