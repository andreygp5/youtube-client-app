import { Component, Input } from '@angular/core';
import { IResultItemStats } from '../../../shared/models/interfaces/result.item.stats.interface';

@Component({
  selector: 'app-item-stats',
  templateUrl: './item-stats.component.html',
  styleUrls: ['./item-stats.component.scss'],
})
export class ItemStatsComponent {
  @Input() stats!: IResultItemStats;

  constructor() {
  }
}
