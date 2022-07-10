import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/core/classes/book.class';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input('book') book!: Book;

  constructor() {}

  ngOnInit(): void {}
}
