System.register(['angular2/core', './services/account'], function(exports_1) {
    var core_1, account_1;
    var APP_SERVICES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            }],
        execute: function() {
            exports_1("APP_SERVICES", APP_SERVICES = [
                core_1.provide(account_1.AccountService, { useClass: account_1.AccountService })
            ]);
        }
    }
});
//# sourceMappingURL=app.services.js.map