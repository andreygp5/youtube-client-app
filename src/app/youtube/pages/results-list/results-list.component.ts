import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';
import { VideoResultsService } from '../../services/video-results.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent implements OnInit {
  public $itemsList: BehaviorSubject<IResultItem[]> = new BehaviorSubject<IResultItem[]>([]);

  constructor(private resultsService: VideoResultsService) {
  }

  public ngOnInit(): void {
    this.$itemsList = this.resultsService.videosList;
  }
}
