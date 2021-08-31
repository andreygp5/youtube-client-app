import { Pipe, PipeTransform } from '@angular/core';
import { IResultItem } from '../../shared/models/interfaces/result.item.inteface';
import { SortDirectionEnum } from '../../shared/models/enums/sort.direction.enum';

@Pipe({
  name: 'sortDirection',
  pure: false,
})
export class SortDirectionPipe implements PipeTransform {
  constructor() {
  }

  transform(videosList: IResultItem[] | null, sortDirection: SortDirectionEnum | null | undefined): IResultItem[] {
    if (!videosList) {
      return [];
    }

    if (sortDirection && videosList) {
      return this.applySortDirection(videosList, sortDirection);
    }

    return videosList;
  }

  private applySortDirection(videosList: IResultItem[], sortDirection: SortDirectionEnum | null | undefined): IResultItem[] {
    switch (sortDirection) {
      case 'INCREASING': {
        return videosList;
      }
      case 'DECREASING': {
        return videosList.slice().reverse();
      }
      default: {
        return videosList;
      }
    }
  }
}
