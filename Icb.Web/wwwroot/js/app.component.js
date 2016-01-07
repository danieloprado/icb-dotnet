System.register(['angular2/core', 'angular2/router', 'angular2/http', './account/login.component', './dashboard/dashboard.component', './account/account.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, http_1, login_component_1, dashboard_component_1, account_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router, http, accountService) {
                    this.router = router;
                    this.http = http;
                    this.accountService = accountService;
                    http.request("http://localhost:58939/").subscribe(function (response) {
                        console.log(response);
                    });
                    if (!accountService.isLogged()) {
                        router.navigate(['Login']);
                        return;
                    }
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        templateUrl: 'templates/layout',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [account_service_1.AccountService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'Dashboard', component: dashboard_component_1.DashboardComponent },
                        { path: '/login', name: 'Login', component: login_component_1.LoginComponent, useAsDefault: true }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Router, http_1.Http, account_service_1.AccountService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map