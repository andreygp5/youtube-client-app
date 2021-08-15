import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatSnackBarModule,
  ],
})
export class MaterialModule {
}
