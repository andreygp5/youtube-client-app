import { Component, Input } from '@angular/core';
import { SortNameEnum } from '../../../../shared/models/enums/sort.name.enum';
import { SortDirectionEnum } from '../../../../shared/models/enums/sort.direction.enum';
import { SortResultsService } from '../../../services/sort-results.service';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  @Input() public isHidden!: boolean;

  // Need this to use enums in template
  public sortNameEnum = SortNameEnum;
  public sortDirectionEnum = SortDirectionEnum;

  public checkedSortName: SortNameEnum | undefined;
  public checkedSortDirection: SortDirectionEnum | undefined;

  constructor(private sortSettingsService: SortResultsService) {
  }

  public onSortNameChange(buttonValue: SortNameEnum | undefined): void {
    if (buttonValue) {
      this.checkedSortName = buttonValue;

      // If sort direction hasn't been chosen
      if (!this.checkedSortDirection) {
        this.checkedSortDirection = SortDirectionEnum.INCREASING;
      }

      this.setSortSettings();
    }
  }

  public onSortDirectionChange(buttonValue: SortDirectionEnum | undefined): void {
    if (buttonValue) {
      this.checkedSortDirection = buttonValue;

      // If sort name hasn't been chosen
      if (!this.checkedSortName) {
        this.checkedSortName = SortNameEnum.DATE;
      }

      this.setSortSettings();
    }
  }

  private setSortSettings() {
    this.sortSettingsService.setSortSettings({
      sortName: this.checkedSortName,
      sortDirection: this.checkedSortDirection,
    });
  }
}
