import { Directive, HostBinding, Input } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[appDateBorder]',
})
export class DateBorderDirective {
  @HostBinding('style.border-color')
  public borderColor: 'green' | 'blue' | 'red' = 'green';

  @Input()
  set date(videoDate: Date) {
    const daySincePublished = moment().diff(moment(videoDate), 'days');
    this.setBorderColor(daySincePublished);
  }

  private setBorderColor(daySincePublished: number): void {
    if (daySincePublished < 7) {
      this.borderColor = 'blue';
    } else if (daySincePublished < 30) {
      this.borderColor = 'green';
    } else if (daySincePublished > 180) {
      this.borderColor = 'red';
    }
  }
}
