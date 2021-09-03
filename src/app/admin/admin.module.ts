import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CreateVideoCardComponent } from './pages/create-video-card/create-video-card.component';


@NgModule({
  declarations: [
    CreateVideoCardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule {
}
