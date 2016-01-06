declare var $: any;

import {Component, View} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {Router} from 'angular2/router';

import {LoginModel} from './login.model';
import {AccountService} from './account.service';

@View({
    templateUrl: "/templates/account/login"
})
@Component({
    providers: [AccountService]
})
export class LoginComponent {
    public form: any;
    public model: LoginModel;

    constructor(private router: Router, private accountService: AccountService) {

        if (accountService.isLogged()) {
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

