import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';

@Component({
  selector: 'app-results-item',
  templateUrl: './results-item.component.html',
  styleUrls: ['./results-item.component.scss'],
})
export class ResultsItemComponent implements OnInit {
  @Input() item!: IResultItem;

  constructor() {}

  ngOnInit(): void {}
}
