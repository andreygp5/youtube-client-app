import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { FilterByWordService } from '../../core/services/filter-by-word.service';

@Pipe({
  name: 'filterByWord',
  pure: false
})
export class FilterByWordPipe implements PipeTransform {
  private filterWord: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private filterByWordService: FilterByWordService) {
    this.filterWord = this.filterByWordService.filterWord;
  }

  transform(videosList: IResultItem[] | null): IResultItem[] {
    if (videosList) {
      return videosList.filter((video) => video.snippet.title.includes(this.filterWord.value || ''));
    }

    return [];
  }
}
