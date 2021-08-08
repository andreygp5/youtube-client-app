import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateBorder]',
})
export class DateBorderDirective implements OnInit {
  MILISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  @Input() dateString!: string;

  dateObj: Date = new Date();

  borderColor: 'green' | 'blue' | 'red' = 'green';

  constructor(private el: ElementRef) {
  }

  ngOnInit() {
    this.dateObj = new Date(this.dateString);

    this.setBorderColor();
  }

  setBorderColor() {
    const now = new Date();
    const daySincePublished = (now.getTime() - this.dateObj.getTime()) / this.MILISECONDS_IN_A_DAY;

    if (daySincePublished < 7) {
      this.borderColor = 'blue';
    } else if (daySincePublished < 31) {
      this.borderColor = 'green';
    } else {
      this.borderColor = 'red';
    }

    this.el.nativeElement.style.borderColor = this.borderColor;
  }
}
