import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { BrowserService } from 'src/app/core/services/browser.service';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  usernameLabel = 'Username';
  passwordLabel = 'Password';
  loginBtnLabel = 'Login';
  loginToContinueStr = 'Login to continue';
  requiredErrorMsg = 'You must enter a value';
  loginSuccessfulMsg = 'Successfully logged in';

  loginForm = new FormGroup({
    username: new FormControl('loki', [Validators.required]),
    password: new FormControl('123456', [Validators.required]),
  });

  constructor(
    private browserService: BrowserService,
    private authService: AuthService,
    private router: Router,
    private notifService: NotificationService
  ) {}

  ngOnInit(): void {}

  getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return this.requiredErrorMsg;
    }

    return '';
  }

  onLogin() {
    throw Error('Error');
    const { username, password } = this.loginForm.value;

    this.browserService
      .doLogin(username || '', password || '')
      .subscribe((response: any) => {
        if (response?.token && response?.user) {
          this.authService.setAuthorized(response.token, response.user);
          this.router.navigateByUrl('/home');
          this.notifService.showSuccessMsg(this.loginSuccessfulMsg);
        }
      });
  }
}
