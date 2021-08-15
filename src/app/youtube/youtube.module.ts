import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListModule } from './pages/results-list/results-list.module';
import { VideoDetailsModule } from './pages/video-details/video-details.module';
import { YoutubeRoutingModule } from './youtube-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    ResultsListModule,
    VideoDetailsModule,
  ],
})
export class YoutubeModule {
}
