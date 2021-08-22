import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';
import { SearchValuesService } from '../../../services/search-values.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  @Output() public didToggleSettings = new EventEmitter<boolean>();

  public searchInput: string = '';

  constructor(
    public authService: AuthService,
    private searchValuesService: SearchValuesService,
  ) {
  }

  public toggleSettings(): void {
    this.didToggleSettings.emit();
  }

  public setSearchInput(): void {
    this.searchValuesService.setSearchInput(this.searchInput);
  }
}
