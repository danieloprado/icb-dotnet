import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {LoginComponent} from './account/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
    selector: 'app',
    templateUrl: 'templates/layout',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true }
])
export class AppComponent {
    constructor(private router: Router) {
        //router.
    }

}