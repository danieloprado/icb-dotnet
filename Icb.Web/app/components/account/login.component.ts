declare var $: any;

import {Component, View} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Router} from 'angular2/router';
import {Response} from 'angular2/http';

import {LoginModel} from './login.model';
import {AccountService} from './../../services/account';
import {ModelValidationService} from './../../services/modelValidation';

import {APP_DIRECTIVES} from '../../app.directives';


@View({
    templateUrl: "/templates/account/login",
    directives: [APP_DIRECTIVES]
})
@Component({})
export class LoginComponent {
    public form: any;
    public errorMessage: string;
    public model: LoginModel;

    constructor(
        private _router: Router,
        private _accountService: AccountService,
        private _modelService: ModelValidationService
    ) {

        if (_accountService.isLogged()) {
            _router.navigate(['Dashboard']);
            return;
        }

        this.model = new LoginModel();
    }

    onSubmit(form: any) {
        this.form = form;
        this.errorMessage = "";

        if (!$(form).valid()) return;

        this._accountService.login(this.model.email, this.model.password)
            .subscribe((response) => this.onLoginSuccesfully(response), (err) => this.onLoginError(err));
    }

    private onLoginSuccesfully(response) {
        this._router.navigate(['Dashboard']);
    }

    private onLoginError(err: Response) {
        switch (err.status) {
            case 400:
                this._modelService.resolve(this.form, err.json());
                break;
            case 401:
                this.errorMessage = "Informaçoes de acesso inválidas";
                break;
        }
    }
}

