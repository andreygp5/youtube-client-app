import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IResultItem } from '../../interfaces/result.item.inteface';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() didToggleSettings = new EventEmitter<boolean>();

  @Output() didSearch = new EventEmitter<IResultItem[]>();

  constructor(private resultsService: ResultsService) {
  }

  ngOnInit(): void {
  }

  toggleSettings(): void {
    this.didToggleSettings.emit();
  }

  search() {
    this.didSearch.emit(this.resultsService.getCards());
  }
}
