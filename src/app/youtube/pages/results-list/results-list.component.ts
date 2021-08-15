import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  public $itemsList: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);

  constructor(private resultsService: ResultsService) {
  }

  public ngOnInit(): void {
    this.$itemsList = this.resultsService.resultItems;
  }

  // private subscribeToItemsSearch(): void {
  //   this.resultsService.resultItems.subscribe((res) => {
  //     this.itemsList = res;
  //   })
  // }
}
