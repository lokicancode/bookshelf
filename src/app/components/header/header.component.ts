import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Bookshelf';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onHeaderClick() {
    this.router.navigateByUrl('/landing');
  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }
}
