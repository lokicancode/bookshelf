import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Book } from 'src/app/core/classes/book.class';
import { BookshelfService } from 'src/app/core/services/bookshelf.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  activeBook!: Book;
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private bShelfService: BookshelfService) {}

  get bookShelf() {
    return this.bShelfService.getValue();
  }

  ngOnInit(): void {
    this.bShelfService.loadBookshelf$()?.subscribe();
  }

  onBookSelected(book: Book) {
    this.activeBook = book;
    this.sidenav?.open();
  }

  onViewerClose() {
    this.sidenav?.close();
  }
}
