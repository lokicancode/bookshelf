import { CommonModule } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './errors/global-error-handler';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
  ],
})
export class CoreModule {}
