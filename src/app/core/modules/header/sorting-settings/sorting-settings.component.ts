import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortNameEnum } from '../../../../shared/models/enums/sort.name.enum';
import { SortDirectionEnum } from '../../../../shared/models/enums/sort.direction.enum';
import { ISortSettings } from '../../../../shared/models/interfaces/sort.settings.interface';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  @Input() public isHidden!: boolean;
  @Output() public didSettingsChange = new EventEmitter<ISortSettings>();

  // Need this to use enums in template
  public sortNameEnum = SortNameEnum;
  public sortDirectionEnum = SortDirectionEnum;

  public checkedSortName: SortNameEnum | undefined;
  public checkedSortDirection: SortDirectionEnum | undefined;

  constructor() {
  }

  public onSortNameChange(buttonValue: SortNameEnum | undefined): void {
    if (buttonValue) {
      this.checkedSortName = buttonValue;

      // If sort direction hasn't been chosen
      if (!this.checkedSortDirection) {
        this.checkedSortDirection = SortDirectionEnum.INCREASING;
      }

      this.emitSortSettingsChange();
    }
  }

  public onSortDirectionChange(buttonValue: SortDirectionEnum | undefined): void {
    if (buttonValue) {
      this.checkedSortDirection = buttonValue;

      // If sort name hasn't been chosen
      if (!this.checkedSortName) {
        this.checkedSortName = SortNameEnum.DATE;
      }

      this.emitSortSettingsChange();
    }
  }

  private emitSortSettingsChange(): void {
    this.didSettingsChange.emit({
      sortName: this.checkedSortName,
      sortDirection: this.checkedSortDirection,
    });
  }
}