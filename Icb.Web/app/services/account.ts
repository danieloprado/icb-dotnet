import {Injectable} from 'angular2/core';

import {StorageService} from './storage';

@Injectable()
export class AccountService {
    private tokenKey: string = "token";

    constructor(private _storage: StorageService) {

    }

    isLogged = this._storage.hasToken;
    logoff = this._storage.removeToken;
}