import { Component } from '@angular/core';
import { IResultItem } from './shared/models/interfaces/result.item.inteface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public resultItemsList: IResultItem[] = [];

  public setResultItems(items: IResultItem[]) {
    this.resultItemsList = items;
  }
}
