import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateVideoCardComponent } from './pages/create-video-card/create-video-card.component';

const routes: Routes = [
  {
    path: 'create-video-card',
    component: CreateVideoCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
