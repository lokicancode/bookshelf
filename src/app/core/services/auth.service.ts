import { Injectable } from '@angular/core';
import { User } from '../classes/user.class';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _baseurl = 'api/v1';
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

  setAuthorized(token: string, user: User) {
    this._token = token;
    const userLocal = new User();
    userLocal.displayName = user.displayName;
    userLocal.username = user.username;
    this._user = userLocal;
  }
}
