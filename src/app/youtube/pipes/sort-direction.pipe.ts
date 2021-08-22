import { Pipe, PipeTransform } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchValuesService } from '../../core/services/search-values.service';
import { ISortSettings } from '../../shared/models/interfaces/sort.settings.interface';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';

@Pipe({
  name: 'sortDirection'
})
export class SortDirectionPipe implements PipeTransform {
  private sortSettings: BehaviorSubject<ISortSettings | null> = new BehaviorSubject<ISortSettings | null>(null);

  constructor(private searchValuesService: SearchValuesService) {
    this.sortSettings = this.searchValuesService.sortSettings;
  }

  transform(videosList: IResultItem[] | null): IResultItem[] {
    if (this.sortSettings.value?.sortDirection && videosList) {
      return this.applySortDirection(videosList);
    }

    return [];
  }

  private applySortDirection(videosList: IResultItem[]): IResultItem[] {
    switch (this.sortSettings.value?.sortDirection) {
      case 'INCREASING': {
        return videosList;
      }
      case 'DECREASING': {
        return videosList.reverse();
      }
      default: {
        return videosList;
      }
    }
  }
}
