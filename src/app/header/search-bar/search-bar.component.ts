import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  @Output() didToggleSettings = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleSettings(): void {
    this.didToggleSettings.emit();
  }
}
