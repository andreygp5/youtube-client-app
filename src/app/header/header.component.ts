import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';
import { ISortSettings } from '../interfaces/sort.settings.interface';
import { SortResultsService } from '../services/sort-results.service';
import { FilterByWordService } from '../services/filter-by-word.service';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  resultItemsList: IResultItem[] = [];
  isSettingsHidden = true;

  @Output() didResultItemsSet = new EventEmitter<IResultItem[]>();
  @Output() didSortSettingsChange = new EventEmitter<ISortSettings>();

  constructor(
    private sortResultsService: SortResultsService,
    private filterByWordService: FilterByWordService,
    private resultsService: ResultsService,
  ) {
  }

  ngOnInit() {
    this.subscribeToFilterByWords();
  }

  subscribeToFilterByWords() {
    this.filterByWordService.filterWord.subscribe(() => {
      this.emitCards(this.resultsService.transformResults(this.resultItemsList));
    });
  }

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  onSortSettingsChange(sortSettings: ISortSettings) {
    this.sortResultsService.setSortSettings(sortSettings);
    this.emitCards(this.resultsService.transformResults(this.resultItemsList));
  }

  setCards(items: IResultItem[]) {
    this.resultItemsList = items;
    this.emitCards(items);
  }

  emitCards(items: IResultItem[]) {
    this.didResultItemsSet.emit(items);
  }
}
