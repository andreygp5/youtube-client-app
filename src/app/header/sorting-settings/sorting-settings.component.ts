import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SortNameEnum } from '../../enums/sort.name.enum';
import { SortDirectionEnum } from '../../enums/sort.direction.enum';
import { ISortSettings } from '../../interfaces/sort.settings.interface';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent {
  @Input() isHidden!: boolean;

  @Output() didSettingsChange = new EventEmitter<ISortSettings>();

  checkedSortName: SortNameEnum | undefined;

  checkedSortDirection: SortDirectionEnum | undefined;

  constructor() {
  }

  emitSortSettingsChange() {
    this.didSettingsChange.emit({
      sortName: this.checkedSortName,
      sortDirection: this.checkedSortDirection,
    });
  }

  onSortNameChange(buttonValue: SortNameEnum | undefined) {
    if (buttonValue) {
      this.checkedSortName = buttonValue;

      // If sort direction hasn't been chosen
      if (!this.checkedSortDirection) {
        this.checkedSortDirection = SortDirectionEnum.INCREASING;
      }

      this.emitSortSettingsChange();
    }
  }

  onSortDirectionChange(buttonValue: SortDirectionEnum | undefined) {
    if (buttonValue) {
      this.checkedSortDirection = buttonValue;

      // If sort name hasn't been chosen
      if (!this.checkedSortName) {
        this.checkedSortName = SortNameEnum.DATE;
      }

      this.emitSortSettingsChange();
    }
  }
}
