import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsItemDescComponent } from './results-item-desc.component';

describe('ResultsItemDescComponent', () => {
  let component: ResultsItemDescComponent;
  let fixture: ComponentFixture<ResultsItemDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultsItemDescComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsItemDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
