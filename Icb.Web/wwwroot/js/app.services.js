System.register(['angular2/core', './services/api', './services/account', './services/storage'], function(exports_1) {
    var core_1, api_1, account_1, storage_1;
    var APP_SERVICES;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            },
            function (storage_1_1) {
                storage_1 = storage_1_1;
            }],
        execute: function() {
            exports_1("APP_SERVICES", APP_SERVICES = [
                core_1.provide(api_1.ApiService, { useClass: api_1.ApiService }),
                core_1.provide(account_1.AccountService, { useClass: account_1.AccountService }),
                core_1.provide(storage_1.StorageService, { useClass: storage_1.StorageService }),
            ]);
        }
    }
});
//# sourceMappingURL=app.services.js.map