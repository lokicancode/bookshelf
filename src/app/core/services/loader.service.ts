import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoaderDialogComponent } from 'src/app/dialogs/components';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  private _dialogRef!: MatDialogRef<LoaderDialogComponent>;
  private _dialogOpened: boolean = false;

  constructor(private dialog: MatDialog) {}

  showLoaderDialog() {
    if (!this._dialogOpened) {
      this._dialogOpened = true;

      this._dialogRef = this.dialog.open(LoaderDialogComponent, {
        width: '400px',
        maxWidth: '100%',
        maxHeight: '100%',
        disableClose: true,
        hasBackdrop: true,
      });

      this._dialogRef.afterClosed().subscribe(() => {
        this._dialogOpened = false;
      });
    }
  }

  hideLoaderDialog() {
    this._dialogRef?.close?.();
  }
}
