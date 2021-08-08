import { Component } from '@angular/core';
import { IResultItem } from './interfaces/result.item.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  resultItems: IResultItem[] = [];

  setResultItems(items: IResultItem[]) {
    this.resultItems = items;
  }
}
