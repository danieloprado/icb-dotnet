import {Provider, provide} from 'angular2/core';

import {ApiService} from './services/api';
import {AccountService} from './services/account';
import {StorageService} from './services/storage';

export var APP_SERVICES: Provider[] = [
    provide(ApiService, { useClass: ApiService }),
    provide(AccountService, { useClass: AccountService }),
    provide(StorageService, { useClass: StorageService }),
];