declare var $: any;

import {Component, View} from 'angular2/core';
import {NgForm}    from 'angular2/common';

import {LoginModel} from './login.model';

@View({
    templateUrl: "/templates/account/login"
})
@Component({})
export class LoginComponent {
    public form: any;
    public model: LoginModel;

    constructor() {
        this.model = new LoginModel();
    }

    onSubmit(form) {
        //$(form).valid();
        //$.validator.unobtrusive.parse("form");

        console.log('ok', $(form).valid());
    }
}

