import {Component} from 'angular2/core';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';

import {LoginComponent} from './account/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import {AccountService} from './account/account.service';

@Component({
    selector: 'app',
    templateUrl: 'templates/layout',
    directives: [ROUTER_DIRECTIVES],
    providers: [AccountService]

})
@RouteConfig([
    { path: '/', name: 'Dashboard', component: DashboardComponent },
    { path: '/login', name: 'Login', component: LoginComponent, useAsDefault: true }
])
export class AppComponent {
    constructor(private router: Router, private http: Http, private accountService: AccountService) {



        http.request("http://localhost:58939/").subscribe((response: any) => {
            console.log(response);
        });

        if (!accountService.isLogged()) {
            router.navigate(['Login']);
            return;
        }
    }
}