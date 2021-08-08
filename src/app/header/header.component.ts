import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IResultItem } from '../interfaces/result.item.inteface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  itemsList: IResultItem[] = [];

  isSettingsHidden = true;

  @Output() didItemsSet = new EventEmitter<IResultItem[]>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSettings() {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  setCards(items: IResultItem[]) {
    this.itemsList = items;
    this.didItemsSet.emit(this.itemsList);
  }
}
