import {Injectable} from 'angular2/core';

@Injectable()
export class AccountService {
    private tokenKey: string = "token";

    isLogged() {
        return localStorage.getItem(this.tokenKey) != null;
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
}
