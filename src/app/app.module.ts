import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { HttpClientModule } from '@angular/common/http';

import mockServer from './app.mock';
import { CoreModule } from './core/core.module';
import { DialogsModule } from './dialogs/dialogs.module';

mockServer();

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    HttpClientModule,
    CoreModule,
    DialogsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
