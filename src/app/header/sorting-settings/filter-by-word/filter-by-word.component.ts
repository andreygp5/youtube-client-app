import { Component } from '@angular/core';
import { FilterByWordService } from '../../../services/filter-by-word.service';

@Component({
  selector: 'app-filter-by-word',
  templateUrl: './filter-by-word.component.html',
  styleUrls: ['./filter-by-word.component.scss'],
})
export class FilterByWordComponent {
  public filterWordInput: string = '';

  constructor(private filterByWordService: FilterByWordService) {
  }

  onFilterWordChange(newValue: string) {
    this.filterWordInput = newValue;
    this.filterByWordService.setWordFilter(newValue);
  }
}
