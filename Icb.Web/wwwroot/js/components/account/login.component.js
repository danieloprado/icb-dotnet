System.register(['angular2/core', 'angular2/router', './login.model', './../../services/account', './../../services/modelValidation', '../../app.directives'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_model_1, account_1, modelValidation_1, app_directives_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_model_1_1) {
                login_model_1 = login_model_1_1;
            },
            function (account_1_1) {
                account_1 = account_1_1;
            },
            function (modelValidation_1_1) {
                modelValidation_1 = modelValidation_1_1;
            },
            function (app_directives_1_1) {
                app_directives_1 = app_directives_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(_router, _accountService, _modelService) {
                    this._router = _router;
                    this._accountService = _accountService;
                    this._modelService = _modelService;
                    if (_accountService.isLogged()) {
                        _router.navigate(['Dashboard']);
                        return;
                    }
                    this.model = new login_model_1.LoginModel();
                }
                LoginComponent.prototype.onSubmit = function (form) {
                    var _this = this;
                    this.form = form;
                    this.errorMessage = "";
                    if (!$(form).valid())
                        return;
                    this._accountService.login(this.model.email, this.model.password)
                        .subscribe(function (response) { return _this.onLoginSuccesfully(response); }, function (err) { return _this.onLoginError(err); });
                };
                LoginComponent.prototype.onLoginSuccesfully = function (response) {
                    this._router.navigate(['Dashboard']);
                };
                LoginComponent.prototype.onLoginError = function (err) {
                    switch (err.status) {
                        case 400:
                            this._modelService.resolve(this.form, err.json());
                            break;
                        case 401:
                            this.errorMessage = "Informaçoes de acesso inválidas";
                            break;
                    }
                };
                LoginComponent = __decorate([
                    core_1.View({
                        templateUrl: "/templates/account/login",
                        directives: [app_directives_1.APP_DIRECTIVES]
                    }),
                    core_1.Component({}), 
                    __metadata('design:paramtypes', [router_1.Router, account_1.AccountService, modelValidation_1.ModelValidationService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map