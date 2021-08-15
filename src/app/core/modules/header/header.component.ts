import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isSettingsHidden: boolean = true;

  constructor() {
  }

  public toggleSettings(): void {
    this.isSettingsHidden = !this.isSettingsHidden;
  }

  public ngOnInit(): void {
  }
}
