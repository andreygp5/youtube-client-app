import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent implements OnInit {
  @Input() public item!: IResultItem;

  public title: string = '';
  public description: string = '';

  public publishedAt: string = '';

  public imageUrl: string = '';

  public viewCount: number = 0;
  public likeCount: number = 0;
  public dislikeCount: number = 0;
  public commentCount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    const { title = '', description = '', publishedAt = '' } = this.item.snippet;
    const { viewCount = '0', likeCount = '0', dislikeCount = '0', commentCount = '0' } = this.item.statistics;
    const imageUrl = this.item.snippet.thumbnails.high.url;

    this.title = title;
    this.description = description;
    this.publishedAt = publishedAt;

    this.imageUrl = imageUrl;

    this.viewCount = Number(viewCount);
    this.likeCount = Number(likeCount);
    this.dislikeCount = Number(dislikeCount);
    this.commentCount = Number(commentCount);
  }
}
