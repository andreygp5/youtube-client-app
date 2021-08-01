import { Component, Input, OnInit } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';

@Component({
  selector: 'app-results-item-desc',
  templateUrl: './results-item-desc.component.html',
  styleUrls: ['./results-item-desc.component.scss'],
})
export class ResultsItemDescComponent implements OnInit {
  @Input() item!: IResultItem;

  constructor() {}

  ngOnInit(): void {}
}
