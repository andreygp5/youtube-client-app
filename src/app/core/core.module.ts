import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from './components/header/header.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HeaderModule,
  ],
  exports: [
    NotFoundComponent,
    HeaderModule,
  ],
})
export class CoreModule {
}
