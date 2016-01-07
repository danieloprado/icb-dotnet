import {Injectable} from 'angular2/core';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';


import {StorageService} from './storage';

@Injectable()
export class ApiService {
    constructor(private _http: Http, private _storage: StorageService) {

    }

    private apiUrl(controller: string, action: string) {
        return `api/${controller}/${action}`;
    }

    private getHeaders() {
        var token = this._storage.getToken();
        return new Headers({ "Authentication": `Bearer ${token}` });
    }

    get(controller: string, action: string, data?: any): Observable<Response> {
        var url = this.apiUrl(controller, action);

        return this._http.get(url, new RequestOptions({
            headers: this.getHeaders(),
            body: data
        }));
    }

    post(controller: string, action: string, data?: any): Observable<Response> {
        var url = this.apiUrl(controller, action);

        return this._http.post(url, data, new RequestOptions({
            headers: this.getHeaders()
        }));
    }
}