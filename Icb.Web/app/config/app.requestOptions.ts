import {Injectable} from 'angular2/core';
import {BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions} from 'angular2/http';

import {AccountService} from './../account/account.service';

@Injectable()
export class AppRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers(["test", "oi"]);

    constructor(private accountService: AccountService) {
        super();
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (this.accountService.isLogged()) {
            var token = this.accountService.getToken();
            options.headers.append("Authorization", `Bearer ${token}`);
        }


        return new RequestOptions({
            method: options.method,
            headers: options.headers,
            body: options.body,
            url: options.url,
            search: options.search
        });
    }
}
