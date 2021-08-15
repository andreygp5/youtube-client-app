import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';
import { ResultsService } from '../../services/results.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  videoItem?: IResultItem;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private resultsService: ResultsService,
  ) {
  }

  ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  subscribeToRouteParams(): void {
    this.route.paramMap
      .pipe(map((paramMap) => paramMap.get('id')))
      .subscribe((id) => {
        this.setItemById(id || '');
      });
  }

  public goBack(): void {
    this.location.back();
  }

  private setItemById(id: IResultItem['id']): void {
    this.videoItem = this.resultsService.getItemById(id);
  }
}
