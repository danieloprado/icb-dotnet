
import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, RequestOptions} from 'angular2/http';


import {AppComponent} from './app.component';
import {AppRequestOptions} from './config/app.requestoptions';
import {AccountService} from './account/account.service';



bootstrap(AppComponent, [AccountService, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(RequestOptions, { useClass: AppRequestOptions })]);