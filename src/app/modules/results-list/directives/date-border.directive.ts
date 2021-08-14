import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateBorder]',
})
export class DateBorderDirective implements OnInit {
  private MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;

  @Input() public dateString!: string;

  private dateObj: Date = new Date();
  private borderColor: 'green' | 'blue' | 'red' = 'green';

  constructor(private el: ElementRef) {
  }

  public ngOnInit(): void {
    this.dateObj = new Date(this.dateString);

    this.setBorderColor();
  }

  private setBorderColor(): void {
    const now = new Date();
    const daySincePublished = (now.getTime() - this.dateObj.getTime()) / this.MILLISECONDS_IN_A_DAY;

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
