import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, NgZone } from '@angular/core';
import { NotificationService } from '../services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  consoleErrorPrefix = 'Error from global error handler';
  clientErrorStr = 'Client Error!';
  apiErrorStr = 'API Error!';

  constructor(
    private notifService: NotificationService,
    private zone: NgZone
  ) {}

  handleError(error: any): void {
    let errorMsg = '';

    if (error instanceof HttpErrorResponse) {
      errorMsg = error?.error?.error || this.apiErrorStr;
    } else {
      errorMsg = error?.rejection?.message || this.clientErrorStr;
    }

    this.zone.run(() => {
      this.notifService.showErrorMsg(errorMsg);
    });

    console.error(this.consoleErrorPrefix, error);
  }
}
