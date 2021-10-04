import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {
  }

  public showMsg(msg: string): void {
    this.snackBar.open(msg, '', {
      duration: 3000,
    });
  }
}
