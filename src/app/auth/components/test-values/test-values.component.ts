import { Component, OnInit } from '@angular/core';
import { TEST_EMAIL, TEST_PASSWORD } from '../../../core/constants/test.values';

@Component({
  selector: 'app-test-values',
  templateUrl: './test-values.component.html',
  styleUrls: ['./test-values.component.scss'],
})
export class TestValuesComponent implements OnInit {
  public TEST_EMAIL: string = TEST_EMAIL;
  public TEST_PASSWORD: string = TEST_PASSWORD;

  constructor() {
  }

  ngOnInit(): void {
  }

}
