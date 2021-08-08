import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorting-settings',
  templateUrl: './sorting-settings.component.html',
  styleUrls: ['./sorting-settings.component.scss'],
})
export class SortingSettingsComponent implements OnInit {
  @Input() isHidden!: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }
}
