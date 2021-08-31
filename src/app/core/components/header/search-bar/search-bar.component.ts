import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from '../../../../auth/services/auth.service';
import { searchProcessInput } from '../../../../store/actions/search.actions';

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
    private store: Store,
  ) {
  }

  public toggleSettings(): void {
    this.didToggleSettings.emit();
  }

  public setSearchInput(): void {
    this.store.dispatch(searchProcessInput({ input: this.searchInput }));
  }
}
