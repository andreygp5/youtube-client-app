import { SortNameEnum } from '../enums/sort.name.enum';
import { SortDirectionEnum } from '../enums/sort.direction.enum';

export interface ISortSettings {
  sortName: SortNameEnum | undefined;
  sortDirection: SortDirectionEnum | undefined;
}
