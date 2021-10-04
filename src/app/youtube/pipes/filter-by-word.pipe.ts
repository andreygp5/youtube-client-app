import { Pipe, PipeTransform } from '@angular/core';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

@Pipe({
  name: 'filterByWord',
  pure: false,
})
export class FilterByWordPipe implements PipeTransform {
  constructor() {
  }

  transform(videosList: IResultItem[] | null, filterWord: string | null): IResultItem[] {
    if (videosList) {
      if (!filterWord) {
        return videosList;
      }

      return videosList.filter((video) => {
        const lowerCaseTitle = video.snippet.title.toLowerCase();
        const lowerCaseFilterWord = filterWord.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseFilterWord || '');
      });
    }

    return [];
  }
}
