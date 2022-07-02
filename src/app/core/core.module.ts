import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { GlobalErrorHandler } from './errors/global-error-handler';
import { HttpLoaderInterceptor } from './interceptors/http-loader.interceptor';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';

@NgModule({
  imports: [CommonModule],
  exports: [],
  providers: [
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpLoaderInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
