import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';
import { ResultsService } from '../services/results.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  @Input() itemsList: IResultItem[] = [];

  constructor(private resultsService: ResultsService) {
  }

  ngOnInit(): void {
  }

  setCards() {
    this.itemsList = this.resultsService.getCards();
  }
}
