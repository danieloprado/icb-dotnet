import {Injectable} from 'angular2/core';
import {BaseRequestOptions, Headers, RequestOptionsArgs, RequestOptions} from 'angular2/http';

import {AccountService} from './../services/account';

@Injectable()
export class ConfigRequestOptions extends BaseRequestOptions {

    constructor(private accountService: AccountService) {
        super();
    }

    merge(options?: RequestOptionsArgs): RequestOptions {
        if (options.headers == null) {
            options.headers = new Headers();
        }

        if (this.accountService.hasToken()) {
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
