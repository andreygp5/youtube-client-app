import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IResultItem } from '../../../../shared/models/interfaces/result.item.inteface';
import { ResultsService } from '../../../services/results.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() public didToggleSettings = new EventEmitter<boolean>();
  @Output() public didSearch = new EventEmitter<IResultItem[]>();

  constructor(private resultsService: ResultsService) {
  }

  public ngOnInit(): void {
  }

  public toggleSettings(): void {
    this.didToggleSettings.emit();
  }

  public search(): void {
    this.didSearch.emit(this.resultsService.getCards());
  }
}
