import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';
import { ISortSettings } from '../interfaces/sort.settings.interface';
import { SortResultsService } from '../services/sort-results.service';
import { FilterByWordService } from '../services/filter-by-word.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemsList: IResultItem[] = [];
  sortSettings?: ISortSettings;
  isSettingsHidden = true;

  @Output() didItemsSet = new EventEmitter<IResultItem[]>();
  @Output() didSortSettingsChange = new EventEmitter<ISortSettings>();

  constructor(private sortResultsService: SortResultsService, private filterByWordService: FilterByWordService) {
  }

  ngOnInit() {
    this.subscribeToFilterByWords();
  }

  subscribeToFilterByWords() {
    this.filterByWordService.filterWord.subscribe(() => {
      this.sortAndFilterItems(this.itemsList);
    });
  }

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  onSortSettingsChange(sortSettings: ISortSettings) {
    this.sortSettings = sortSettings;
    this.sortAndFilterItems(this.itemsList);
  }

  sortAndFilterItems(items: IResultItem[]) {
    let processedCards = items;

    if (this.sortSettings) {
      processedCards = this.sortResultsService.delegateSort(processedCards, this.sortSettings);
    }

    processedCards = this.filterByWordService.filterByWord(this.itemsList);

    this.emitCards(processedCards);
  }

  setCards(items: IResultItem[]) {
    this.itemsList = items;
    this.emitCards(items);
  }

  emitCards(items: IResultItem[]) {
    this.didItemsSet.emit(items);
  }
}
