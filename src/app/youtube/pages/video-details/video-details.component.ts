import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';
import { YoutubeSearchService } from '../../services/youtube-search.service';

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
    private youtubeSearchService: YoutubeSearchService,
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
    this.youtubeSearchService.getVideoById(id).subscribe((res) => {
      this.videoItem = res;
    });
  }
}
