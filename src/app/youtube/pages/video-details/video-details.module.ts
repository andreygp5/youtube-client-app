import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDetailsComponent } from './video-details.component';

@NgModule({
  declarations: [
    VideoDetailsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    VideoDetailsComponent,
  ],
})
export class VideoDetailsModule {
}
