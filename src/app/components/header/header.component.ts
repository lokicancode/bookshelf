import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BrowserService } from 'src/app/core/services/browser.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title = 'Bookshelf';
  loginLabel = 'Login';
  logoutLabel = 'Logout';
  logoutSuccess = 'Successfully logged out';

  constructor(
    private router: Router,
    private authService: AuthService,
    private browserService: BrowserService,
    private notifService: NotificationService
  ) {}

  ngOnInit(): void {}

  onHeaderClick() {
    this.router.navigateByUrl('/landing');
  }

  onLogin() {
    this.router.navigateByUrl('/login');
  }

  isAuthorized() {
    return this.authService.isAuthorized;
  }

  onLogout() {
    return this.browserService.doLogout().subscribe(() => {
      this.notifService.showSuccessMsg(this.logoutSuccess);
      this.authService.clearAuth();
      window.location.reload();
    });
  }
}
