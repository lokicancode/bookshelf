import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { BookComponent } from './components/book/book.component';
import { ShelfComponent } from './components/shelf/shelf.component';
import { AppMaterialModule } from 'src/app/app-material.module';

@NgModule({
  declarations: [HomeComponent, ViewerComponent, BookComponent, ShelfComponent],
  imports: [CommonModule, HomeRoutingModule, AppMaterialModule],
})
export class HomeModule {}
