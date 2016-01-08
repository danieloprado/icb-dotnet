System.register(['angular2/core', './storage', './api'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, storage_1, api_1;
    var AccountService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (storage_1_1) {
                storage_1 = storage_1_1;
            },
            function (api_1_1) {
                api_1 = api_1_1;
            }],
        execute: function() {
            AccountService = (function () {
                function AccountService(_storage, _api) {
                    this._storage = _storage;
                    this._api = _api;
                    this.tokenKey = "token";
                }
                AccountService.prototype.isLogged = function () {
                    return this._storage.hasToken();
                };
                AccountService.prototype.logoff = function () {
                    this._storage.removeToken();
                };
                AccountService.prototype.login = function (email, password) {
                    return this._api.post("account", "login", { email: email, password: password });
                };
                AccountService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [storage_1.StorageService, api_1.ApiService])
                ], AccountService);
                return AccountService;
            })();
            exports_1("AccountService", AccountService);
        }
    }
});
//# sourceMappingURL=account.js.map