import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ItemStatsComponent } from './components/item-stats/item-stats.component';
import { ResultsItemComponent } from './components/results-item/results-item.component';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { DateBorderDirective } from './directives/date-border.directive';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';

@NgModule({
  declarations: [
    ItemStatsComponent,
    ResultsItemComponent,
    ResultsListComponent,
    DateBorderDirective,
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
  exports: [
    ItemStatsComponent,
  ],
})
export class YoutubeModule {
}
