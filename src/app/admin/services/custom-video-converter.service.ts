import { Injectable } from '@angular/core';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { ICustomVideo } from '../../shared/models/interfaces/custom.video.interface';
import { IResultItemThumbnailInfo } from '../../shared/models/interfaces/result.item.thumbnail.info';

@Injectable({
  providedIn: 'root',
})
export class CustomVideoConverterService {
  constructor() {
  }

  convertCustomVideoToResultVideo(customVideo: ICustomVideo): IResultItem {
    const {
      id,
      title,
      description,
      publishedAt,
      imageLink,
      videoLink,
    } = customVideo;

    const thumbnailInfo: IResultItemThumbnailInfo = {
      url: imageLink,
      width: 0,
      height: 0,
    };

    return {
      id,
      snippet: {
        title,
        description,
        publishedAt,
        thumbnails: {
          default: thumbnailInfo,
          medium: thumbnailInfo,
          high: thumbnailInfo,
          standard: thumbnailInfo,
          maxres: thumbnailInfo,
        },
      },
      statistics: {
        viewCount: '0',
        likeCount: '0',
        dislikeCount: '0',
        commentCount: '0',
      },
      videoUrl: videoLink,
    };
  }
}
