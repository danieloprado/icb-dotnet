import {Provider, provide} from 'angular2/core';

import {ConfigRequestOptions} from './config/requestoptions';
import {ConfigResponseOptions} from './config/responseoptions';
import {RequestOptions, ResponseOptions} from 'angular2/http';


export var APP_CONFIG: Provider[] = [
    provide(RequestOptions, { useClass: ConfigRequestOptions }),
    provide(ResponseOptions, { useClass: ConfigResponseOptions })
];