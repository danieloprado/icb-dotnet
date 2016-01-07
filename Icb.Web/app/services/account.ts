import {Injectable} from 'angular2/core';

@Injectable()
export class AccountService {
    private tokenKey: string = "token";

    hasToken() {
        return localStorage.getItem(this.tokenKey) != null;
    }

    removeToke() {
        localStorage.removeItem(this.tokenKey);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
}