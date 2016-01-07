import {Injectable} from 'angular2/core';

@Injectable()
export class StorageService {
    private tokenKey: string = "token";

    hasToken() {
        return localStorage.getItem(this.tokenKey) != null;
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }
}