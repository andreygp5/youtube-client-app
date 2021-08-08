import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';
import { TrimTextService } from '../services/trim-text.service';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent implements OnInit {
  @Input() item!: IResultItem;

  title: string = '';

  description: string = '';

  imageUrl: string = '';

  viewCount: number = 0;

  likeCount: number = 0;

  dislikeCount: number = 0;

  commentCount: number = 0;

  constructor(private trimTextService: TrimTextService) {
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    const { title = '', description = '' } = this.item.snippet;
    console.log(this.item.snippet);
    const { viewCount = '0', likeCount = '0', dislikeCount = '0', commentCount = '0' } = this.item.statistics;
    const imageUrl = this.item.snippet.thumbnails.high.url;

    this.title = this.trimTextService.trimText(title, 30);
    this.description = this.trimTextService.trimText(description, 60);

    this.imageUrl = imageUrl;

    this.viewCount = Number(viewCount);
    this.likeCount = Number(likeCount);
    this.dislikeCount = Number(dislikeCount);
    this.commentCount = Number(commentCount);
  }
}
