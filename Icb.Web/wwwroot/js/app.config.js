System.register(['angular2/core', './config/requestoptions', './config/responseoptions', 'angular2/http'], function(exports_1) {
    var core_1, requestoptions_1, responseoptions_1, http_1;
    var APP_CONFIG;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (requestoptions_1_1) {
                requestoptions_1 = requestoptions_1_1;
            },
            function (responseoptions_1_1) {
                responseoptions_1 = responseoptions_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            exports_1("APP_CONFIG", APP_CONFIG = [
                core_1.provide(http_1.RequestOptions, { useClass: requestoptions_1.ConfigRequestOptions }),
                core_1.provide(http_1.ResponseOptions, { useClass: responseoptions_1.ConfigResponseOptions })
            ]);
        }
    }
});
//# sourceMappingURL=app.config.js.map