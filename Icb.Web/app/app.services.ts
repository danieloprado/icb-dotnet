import {Provider, provide} from 'angular2/core';

import {AccountService} from './services/account';

export var APP_SERVICES: Provider[] = [
    provide(AccountService, { useClass: AccountService })
];