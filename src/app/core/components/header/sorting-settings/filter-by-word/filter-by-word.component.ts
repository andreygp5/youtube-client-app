import { Component } from '@angular/core';
import { SearchValuesService } from '../../../../services/search-values.service';

@Component({
  selector: 'app-filter-by-word',
  templateUrl: './filter-by-word.component.html',
  styleUrls: ['./filter-by-word.component.scss'],
})
export class FilterByWordComponent {
  public filterWordInput: string = '';

  constructor(private searchValuesService: SearchValuesService) {
  }

  public onFilterWordChange(): void {
    this.searchValuesService.setFilterWord(this.filterWordInput);
  }
}
