import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { SortDirectionEnum } from '../../shared/models/enums/sort.direction.enum';
import { ISortSettings } from '../../shared/models/interfaces/sort.settings.interface';
import { SortNameEnum } from '../../shared/models/enums/sort.name.enum';

@Injectable({
  providedIn: 'root',
})
export class SortResultsService {
  public sortSettings: BehaviorSubject<ISortSettings | null> = new BehaviorSubject<ISortSettings | null>(null);
  private resultsList: IResultItem[] = [];

  constructor() {
  }

  setSortSettings(sortSettings: ISortSettings): void {
    this.sortSettings.next(sortSettings);
  }

  delegateSort(resultsList: IResultItem[]): IResultItem[] {
    this.resultsList = resultsList;

    if (!this.sortSettings.value) {
      return resultsList;
    }

    const { sortName, sortDirection } = this.sortSettings.value;

    if (!sortName || !sortDirection) {
      return this.resultsList;
    }

    switch (sortName) {
      case SortNameEnum.DATE: {
        return this.sortByDate(sortDirection);
      }
      case SortNameEnum.VIEWS: {
        return this.sortByCountOfView(sortDirection);
      }
      default: {
        return this.resultsList;
      }
    }
  }

  sortByCountOfView(sortDirection: SortDirectionEnum): IResultItem[] {
    switch (sortDirection) {
      case SortDirectionEnum.DECREASING:
        return this.resultsList.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
      case SortDirectionEnum.INCREASING:
        return this.resultsList.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
      default:
        return this.resultsList;
    }
  };

  sortByDate(sortDirection: SortDirectionEnum): IResultItem[] {
    switch (sortDirection) {
      case SortDirectionEnum.DECREASING:
        return this.resultsList.sort((a, b) => new Date(b.snippet.publishedAt).getTime() - new Date(a.snippet.publishedAt).getTime());
      case SortDirectionEnum.INCREASING:
        return this.resultsList.sort((a, b) => new Date(a.snippet.publishedAt).getTime() - new Date(b.snippet.publishedAt).getTime());
      default:
        return this.resultsList;
    }
  };
}
