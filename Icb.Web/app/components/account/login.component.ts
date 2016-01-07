declare var $: any;

import {Component, View} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Router} from 'angular2/router';

import {LoginModel} from './login.model';
import {AccountService} from './../../services/account';

@View({
    templateUrl: "/templates/account/login"
})
@Component({})
export class LoginComponent {
    public form: any;
    public model: LoginModel;

    constructor(private router: Router, private accountService: AccountService) {

        if (accountService.hasToken()) {
            router.navigate(['Dashboard']);
            return;
        }

        this.model = new LoginModel();
    }

    onSubmit(form) {
        //$(form).valid();
        //$.validator.unobtrusive.parse("form");

        console.log('ok', $(form).valid());
    }
}

