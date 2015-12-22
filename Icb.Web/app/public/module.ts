/// <reference path="../shared/module.ts" />

module PublicApp {
    export var module = angular.module("icbApp.public", [SharedModule.module.name]);


    //config($routeProvider: angular.route.IRouteProvider): void {
    //    //$routeProvider.
    //    //    when('/phones', {
    //    //        templateUrl: 'partials/phone-list.html',
    //    //        controller: 'PhoneListCtrl'
    //    //    }).
    //    //    when('/phones/:phoneId', {
    //    //        templateUrl: 'partials/phone-detail.html',
    //    //        controller: 'PhoneDetailCtrl'
    //    //    }).
    //    //    otherwise({
    //    //        redirectTo: '/phones'
    //    //    });
    //}
}

