System.register(['angular2/platform/browser', 'angular2/core', 'angular2/router', 'angular2/http', './app.component', './config/app.requestoptions', './account/account.service'], function(exports_1) {
    var browser_1, core_1, router_1, http_1, app_component_1, app_requestoptions_1, account_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_requestoptions_1_1) {
                app_requestoptions_1 = app_requestoptions_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [account_service_1.AccountService, router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, core_1.provide(http_1.RequestOptions, { useClass: app_requestoptions_1.AppRequestOptions })]);
        }
    }
});
//# sourceMappingURL=bootstrap.js.map