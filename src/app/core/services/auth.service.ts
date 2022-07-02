import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../classes/user.class';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _baseurl = environment.apiUrl;
  private _token = '';

  private _user?: User;

  constructor() {}

  get baseUrl() {
    return this._baseurl;
  }

  get token() {
    return this._token;
  }

  get user() {
    return this._user;
  }

  get isAuthorized() {
    return !!this.token;
  }

  setAuthorized(token: string, user: User) {
    this._token = token;
    const userLocal = new User();
    userLocal.displayName = user.displayName;
    userLocal.username = user.username;
    this._user = userLocal;
  }
}
