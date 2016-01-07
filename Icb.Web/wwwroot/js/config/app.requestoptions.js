System.register(['angular2/core', 'angular2/http', './../account/account.service'], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, account_service_1;
    var AppRequestOptions;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (account_service_1_1) {
                account_service_1 = account_service_1_1;
            }],
        execute: function() {
            AppRequestOptions = (function (_super) {
                __extends(AppRequestOptions, _super);
                function AppRequestOptions(accountService) {
                    _super.call(this);
                    this.accountService = accountService;
                    this.headers = new http_1.Headers(["test", "oi"]);
                }
                AppRequestOptions.prototype.merge = function (options) {
                    if (options.headers == null) {
                        options.headers = new http_1.Headers();
                    }
                    if (this.accountService.isLogged()) {
                        var token = this.accountService.getToken();
                        options.headers.append("Authorization", "Bearer " + token);
                    }
                    return new http_1.RequestOptions({
                        method: options.method,
                        headers: options.headers,
                        body: options.body,
                        url: options.url,
                        search: options.search
                    });
                };
                AppRequestOptions = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [account_service_1.AccountService])
                ], AppRequestOptions);
                return AppRequestOptions;
            })(http_1.BaseRequestOptions);
            exports_1("AppRequestOptions", AppRequestOptions);
        }
    }
});
//# sourceMappingURL=app.requestoptions.js.map