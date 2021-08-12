import { Component, Output, EventEmitter } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';
import { ISortSettings } from '../interfaces/sort.settings.interface';
import { SortResultsService } from '../services/sort-results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  itemsList: IResultItem[] = [];
  sortSettings?: ISortSettings;
  isSettingsHidden = true;

  @Output() didItemsSet = new EventEmitter<IResultItem[]>();
  @Output() didSortSettingsChange = new EventEmitter<ISortSettings>();

  constructor(private sortResultsService: SortResultsService) {
  }

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  onSortSettingsChange(sortSettings: ISortSettings) {
    this.sortSettings = sortSettings;
    this.setCards(this.itemsList);
  }

  setCards(items: IResultItem[]) {
    if (this.sortSettings) {
      this.itemsList = this.sortResultsService.delegateSort(items, this.sortSettings);
    } else {
      this.itemsList = items;
    }

    this.didItemsSet.emit(this.itemsList);
  }
}
