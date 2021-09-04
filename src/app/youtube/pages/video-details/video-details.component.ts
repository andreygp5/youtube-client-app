import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectVideoById } from '../../../store/selectors/youtube.selectors';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
  public videoItem$ = this.store.select(selectVideoById(''));

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private store: Store,
  ) {
  }

  public ngOnInit(): void {
    this.subscribeToRouteParams();
  }

  private subscribeToRouteParams(): void {
    this.route.paramMap
      .pipe(map((paramMap) => paramMap.get('id')))
      .subscribe((id) => {
        this.videoItem$ = this.store.select(selectVideoById(id || ''));
      });
  }

  public goBack(): void {
    this.location.back();
  }
}
