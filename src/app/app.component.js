"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.text1 = 'This is a text uses Uppercase Pipe';
        this.text2 = 'This is a text uses Lowercase Pipe';
        // today = new Date();
        this.today = Date.now();
        // percent
        this.a = 0.123;
        this.b = 1.234567;
        // decimal
        this.e = 122.12345678901234567;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <h1>{{text1 | uppercase}}</h1>\n  <h2>{{text2 | lowercase}}</h2>\n  <p>Time now: {{today | date: 'fullDate'}}</p>\n  <p>Percent number: {{a | percent}}; {{b | percent:'5.3-7'}}</p>\n  <p>Decimal number: {{e | number: '5.4-8'}}</p>\n  <my-app1></my-app1>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map