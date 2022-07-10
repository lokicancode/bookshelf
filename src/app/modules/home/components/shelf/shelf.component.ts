import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/core/classes/book.class';
import { Bookshelf } from 'src/app/core/classes/bookshelf.class';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.scss'],
})
export class ShelfComponent implements OnInit {
  @Input('shelf') shelf!: Bookshelf;

  @Output('bookSelectedEvent') bookSelectedEvent = new EventEmitter<Book>();

  constructor() {}

  ngOnInit(): void {}

  onBookClick(book: Book) {
    this.bookSelectedEvent.emit(book);
  }
}
