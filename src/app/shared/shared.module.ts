import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material/material.module';
import { LogoComponent } from './components/logo/logo.component';
import { TrimTextPipe } from './pipes/trim-text.pipe';

@NgModule({
  declarations: [
    LogoComponent,
    TrimTextPipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    MaterialModule,
    LogoComponent,
    TrimTextPipe,
    FormsModule,
  ],
})
export class SharedModule {
}
