import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsListModule } from './pages/results-list/results-list.module';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';

@NgModule({
  declarations: [
    VideoDetailsComponent
  ],
  imports: [
    CommonModule,
    ResultsListModule,
  ],
})
export class YoutubeModule {
}
