module SharedModule {
    module.factory("httpInterceptor", ["$q", "$rootScope", "$injector", factory]);

    function factory($q, $rootScope, $injector) {
        return {
            request: function(config) {
                $rootScope.pendingRequests++;

                var sessionService = $injector.get("shared.services.session");
                if (sessionService.hasToken()) {
                    config.headers["Authorization"] = 'Bearer ' + sessionService.getToken();
                }

                return config;
            },
            response: function(response) {

                if ($rootScope.pendingRequests > 0) {
                    $rootScope.pendingRequests--;
                }
                if (response.status === 401) {
                    console.log("Response 401");
                }
                if (response.status === 404) {
                    console.log("Response 404");
                }

                if (response.headers("X-Rebuild-Validation")) {
                    setTimeout(function() {
                        var form = angular.element("form");
                        form.removeData("validator");
                        form.removeData("unobtrusiveValidation");
                        $.validator.unobtrusive.parse("form");
                    }, 0);
                }

                return response || $q.when(response);
            },
            responseError: function(rejection) {


                if ($rootScope.pendingRequests > 0) {
                    $rootScope.pendingRequests--;
                }
                if (rejection.status === 401) {
                    console.log("Response Error 401", rejection);
                    window.location.href = settings.Content("/login");
                }
                //if (rejection.status === 404) {
                //    console.log("Response Error 404", rejection);
                //    window.location.href = "~/Members/#/pagenotfound";
                //}
                return $q.reject(rejection);
            }
        }
    }
}