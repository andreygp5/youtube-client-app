import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateVideoCardComponent } from './pages/create-video-card/create-video-card.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateVideoCardComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {
}
