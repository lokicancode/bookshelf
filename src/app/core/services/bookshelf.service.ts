import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Book } from '../classes/book.class';
import { Bookshelf } from '../classes/bookshelf.class';
import { BrowserService } from './browser.service';

@Injectable({ providedIn: 'root' })
export class BookshelfService {
  private _bookShelfStore = new BehaviorSubject<Bookshelf[]>([]);

  constructor(private browserService: BrowserService) {}

  setState(bookShelf: Bookshelf[]) {
    this._bookShelfStore.next(bookShelf);
  }

  getState() {
    return this._bookShelfStore.asObservable();
  }

  getValue() {
    return this._bookShelfStore.getValue();
  }

  loadBookshelf$() {
    return this.browserService.getBookshelf().pipe(
      map((data) => {
        const bookshelfLocal: Bookshelf[] = [];
        data?.forEach((shelf, idx) => {
          if (shelf) {
            bookshelfLocal.push({ title: shelf.title || 'Unknown', books: [] });
          }

          if (shelf.books?.length) {
            bookshelfLocal[idx].books = shelf.books.map(
              (bk) => new Book(bk.title, bk.imageUrl, bk.pdfUrl)
            );
          }
        });

        this.setState(bookshelfLocal);
      })
    );
  }
}
