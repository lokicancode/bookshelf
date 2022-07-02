import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderDialogComponent } from './components';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [LoaderDialogComponent],
  imports: [CommonModule, AppMaterialModule],
  exports: [LoaderDialogComponent],
})
export class DialogsModule {}
