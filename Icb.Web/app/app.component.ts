declare var $: any;

import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

import {LoginComponent} from './components/account/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserComponent} from './components/dashboard/user.component';

import {AccountService} from './services/account';


@Component({
    selector: 'app',
    templateUrl: 'templates/layout',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true },
    { path: '/', name: 'Dashboard', component: DashboardComponent },
    { path: '/users', name: 'Users', component: UserComponent }
])
export class AppComponent {
    constructor(private router: Router, private accountService: AccountService) {
        var publicRoutes = ["login"];

        router.subscribe((routeName) => {
            if (accountService.hasToken()) {
                var form = $("#app-content-body form");
                form.removeData("validator");
                form.removeData("unobtrusiveValidation");
                $.validator.unobtrusive.parse("form");

                return;
            }

            if (publicRoutes.indexOf(routeName) > -1) {
                return;
            }

            router.navigate(['Login']);
        });

        if (!accountService.hasToken()) {
            router.navigate(['Login']);
        }
    }
}