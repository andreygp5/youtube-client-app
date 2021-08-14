import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListComponent } from './results-list.component';
import { ResultsItemComponent } from './results-item/results-item.component';
import { DateBorderDirective } from './directives/date-border.directive';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ResultsListComponent,
    ResultsItemComponent,
    DateBorderDirective,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ResultsListComponent,
  ],
})
export class ResultsListModule {
}
