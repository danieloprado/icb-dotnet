import {Injectable} from 'angular2/core';

@Injectable()
export class AccountService {
    private TokenKey: string = "token";

    isLogged() {
        return localStorage.getItem("token") != null;
    }

        
}
