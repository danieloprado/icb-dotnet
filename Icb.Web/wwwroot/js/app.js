var SharedModule;
(function (SharedModule) {
    SharedModule.module = angular.module("icbApp.shared", ['ngRoute']);
    SharedModule.module
        .config(['$locationProvider', '$httpProvider', config])
        .run(["$rootScope", run]);
    function config($locationProvider, $httpProvider) {
    }
    function run($rootScope) {
    }
})(SharedModule || (SharedModule = {}));
var PublicApp;
(function (PublicApp) {
    PublicApp.module = angular.module("icbApp.public", [SharedModule.module.name]);
})(PublicApp || (PublicApp = {}));
//# sourceMappingURL=app.js.map