import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class BrowserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  doLogin(username: string, password: string) {
    return this.http.post(`${this.authService.baseUrl}/login`, {
      username,
      password,
    });
  }
}
