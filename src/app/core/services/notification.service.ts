import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccessMsg(msg: string) {
    this.snackBar.open(msg, undefined, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'success-notif-panel',
    });
  }

  showErrorMsg(msg: string) {
    this.snackBar.open(msg, undefined, {
      duration: 5000,
      verticalPosition: 'top',
      panelClass: 'error-notif-panel',
    });
  }
}
