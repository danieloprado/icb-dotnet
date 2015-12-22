module SharedModule {
    export var module = angular.module("icbApp.shared", ['ngRoute']);

    module
        .config(['$locationProvider', '$httpProvider', config])
        .run(["$rootScope", run]);


    function config($locationProvider, $httpProvider) {
        $httpProvider.interceptors.push('httpInterceptor');

        $locationProvider.html5Mode(true);
    }

    function run($rootScope) {
        //$.validator.defaults.ignore = "";

        //// Initialize pendingRequests, which controls loading splash screen
        //$rootScope.pendingRequests = 0;
        //$rootScope.loadingVisible = false;

        //$rootScope.$watch("pendingRequests", function (newValue) {
        //    if (newValue > 0) {

        //        if (!$rootScope.loadingVisible) {
        //            // Show loading splash using blockUI
        //            $.blockUI({
        //                css: {
        //                    border: 'none',
        //                    padding: '15px',
        //                    backgroundColor: 'rgba(0,0,0,0)',
        //                    '-webkit-border-radius': '10px',
        //                    '-moz-border-radius': '10px',
        //                    opacity: 1,
        //                    color: '#fff'
        //                },
        //                message: "<i class='fa fa-pulse fa-5x fa-spinner'></i>"
        //            });
        //        }

        //        $rootScope.loadingVisible = true;

        //    } else if (newValue <= 0) {

        //        // Remove loading splash screen
        //        $.unblockUI();
        //        $rootScope.loadingVisible = false;
        //    }
        //});
    }
}