System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ModelValidationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ModelValidationService = (function () {
                function ModelValidationService() {
                }
                ModelValidationService.prototype.resolve = function (form, modelError) {
                    form = $(form);
                    var unbindErrors = [];
                    var messageContainer = null;
                    var keys = Object.keys(modelError);
                    keys.forEach(function (item) {
                        var errors = modelError[item];
                        if (item == "") {
                            errors.forEach(function (error) {
                                unbindErrors.push(error);
                            });
                            return;
                        }
                        if (!$.isArray(errors)) {
                            errors = errors.errors.map(function (errorItem) {
                                return errorItem.errorMessage;
                            });
                        }
                        var name = item.substr(item.indexOf(".") + 1, item.length).toLowerCase();
                        messageContainer = form.find("[data-valmsg-for]").filter(function () {
                            return $(this).attr('data-valmsg-for').toLowerCase() == name;
                        });
                        $("[name='" + name + "']").addClass("input-validation-error");
                        if (messageContainer.size() > 0) {
                            messageContainer.addClass("field-validation-error");
                            messageContainer.removeClass("field-validation-valid");
                            errors.forEach(function (error) {
                                messageContainer.append("<span>" + error + "</span>");
                            });
                            return;
                        }
                        errors.forEach(function (error) {
                            unbindErrors.push(error);
                        });
                    });
                    messageContainer = form.find("[summary-errors]");
                    if (unbindErrors.length > 0 && messageContainer.size() > 0) {
                        messageContainer.addClass("field-validation-error");
                        messageContainer.removeClass("field-validation-valid");
                        unbindErrors.forEach(function (error) {
                            messageContainer.append("<span>" + error + "</span>");
                        });
                    }
                    return unbindErrors;
                };
                ModelValidationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ModelValidationService);
                return ModelValidationService;
            })();
            exports_1("ModelValidationService", ModelValidationService);
        }
    }
});
//# sourceMappingURL=modelValidation.js.map