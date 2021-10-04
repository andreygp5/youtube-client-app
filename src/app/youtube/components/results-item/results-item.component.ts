import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../../../shared/models/interfaces/result.item.inteface';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent implements OnInit {
  @Input() public item!: IResultItem;

  public title: string = '';
  public description: string = '';

  public publishedAt: Date = new Date();

  public imageUrl: string = '';

  constructor() {
  }

  ngOnInit(): void {
    this.initValues();
  }

  initValues(): void {
    const { title = '', description = '', publishedAt = '' } = this.item.snippet;
    const imageUrl = this.item.snippet.thumbnails.high.url;

    this.title = title;
    this.description = description;
    this.publishedAt = new Date(publishedAt);

    this.imageUrl = imageUrl;
  }
}
