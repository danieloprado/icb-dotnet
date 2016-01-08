System.register(['angular2/core', 'angular2/http', './config/responseOptions'], function(exports_1) {
    var core_1, http_1, responseOptions_1;
    var APP_CONFIG;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (responseOptions_1_1) {
                responseOptions_1 = responseOptions_1_1;
            }],
        execute: function() {
            exports_1("APP_CONFIG", APP_CONFIG = [
                core_1.provide(http_1.ResponseOptions, { useClass: responseOptions_1.ConfigResponseOptions })
            ]);
        }
    }
});
//# sourceMappingURL=app.config.js.map