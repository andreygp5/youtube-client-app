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
  isSettingsHidden = true;

  @Output() didItemsSet = new EventEmitter<IResultItem[]>();
  @Output() didSortSettingsChange = new EventEmitter<ISortSettings>();

  constructor(private sortResultsService: SortResultsService) {
  }

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  onSortSettingsChange(sortSettings: ISortSettings) {
    this.setCards(this.sortResultsService.delegateSort(this.itemsList, sortSettings));
  }

  setCards(items: IResultItem[]) {
    this.itemsList = items;
    this.didItemsSet.emit(this.itemsList);
  }
}
