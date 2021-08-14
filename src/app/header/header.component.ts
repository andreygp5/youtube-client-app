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
  public resultItemsList: IResultItem[] = [];
  public isSettingsHidden: boolean = true;

  @Output() public didResultItemsSet = new EventEmitter<IResultItem[]>();
  @Output() public didSortSettingsChange = new EventEmitter<ISortSettings>();

  constructor(
    private sortResultsService: SortResultsService,
    private filterByWordService: FilterByWordService,
    private resultsService: ResultsService,
  ) {
  }

  public toggleSettings(): void {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  public onSortSettingsChange(sortSettings: ISortSettings): void {
    this.sortResultsService.setSortSettings(sortSettings);
    this.emitCards(this.resultsService.transformResults(this.resultItemsList));
  }

  public setCards(items: IResultItem[]): void {
    this.resultItemsList = items;
    this.emitCards(items);
  }

  public ngOnInit(): void {
    this.subscribeToFilterByWords();
  }

  private emitCards(items: IResultItem[]): void {
    this.didResultItemsSet.emit(items);
  }

  private subscribeToFilterByWords(): void {
    this.filterByWordService.filterWord.subscribe(() => {
      this.emitCards(this.resultsService.transformResults(this.resultItemsList));
    });
  }
}
