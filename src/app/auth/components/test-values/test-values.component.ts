import { Component, OnInit } from '@angular/core';
import { ADMIN_EMAIL, ADMIN_PASSWORD, TEST_EMAIL, TEST_PASSWORD } from '../../../core/constants/test.values';

@Component({
  selector: 'app-test-values',
  templateUrl: './test-values.component.html',
  styleUrls: ['./test-values.component.scss'],
})
export class TestValuesComponent implements OnInit {
  public TEST_EMAIL: string = TEST_EMAIL;
  public TEST_PASSWORD: string = TEST_PASSWORD;

  public ADMIN_EMAIL: string = ADMIN_EMAIL;
  public ADMIN_PASSWORD: string = ADMIN_PASSWORD;

  constructor() {
  }

  ngOnInit(): void {
  }

}
