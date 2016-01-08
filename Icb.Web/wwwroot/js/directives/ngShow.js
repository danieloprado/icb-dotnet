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
    var NgShow;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NgShow = (function () {
                function NgShow(_viewContainer) {
                    this._viewContainer = _viewContainer;
                }
                Object.defineProperty(NgShow.prototype, "ngShow", {
                    set: function (newValue) {
                        if (newValue) {
                            this._viewContainer.element.nativeElement.style.display = 'block';
                            return;
                        }
                        this._viewContainer.element.nativeElement.style.display = 'none';
                    },
                    enumerable: true,
                    configurable: true
                });
                NgShow = __decorate([
                    core_1.Directive({
                        selector: '[ngShow]',
                        inputs: ['ngShow: ngShow']
                    }), 
                    __metadata('design:paramtypes', [core_1.ViewContainerRef])
                ], NgShow);
                return NgShow;
            })();
            exports_1("NgShow", NgShow);
        }
    }
});
//# sourceMappingURL=ngShow.js.map