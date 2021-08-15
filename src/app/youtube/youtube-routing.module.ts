import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsListComponent } from './pages/results-list/results-list.component';
import { VideoDetailsComponent } from './pages/video-details/video-details.component';

const routes: Routes = [
  {
    path: '',
    component: ResultsListComponent,
  },
  {
    path: 'details/:id',
    component: VideoDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {
}
