// One way binding
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
var OneComponent = (function () {
    function OneComponent() {
        this.name = 'DLX';
        this.image = 'http://lorempixel.com/200/200';
        this.value = 'Do you marry me?';
    }
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <p>Don't use binding: My name is <strong>DLX</strong></p>\n    <p>Use binding: My name is <strong>{{name}}</strong>\n    <p>Don't use binding: I gift you a picture:<br/>\n    <img src=\"http://lorempixel.com/200/200\" />\n    </p>\n    <p>Use binding: I gift you a picture:<br>\n    <img [src]='image' /></p>\n    <p>Don't use binding: I send you a message:<br>\n    <input type=\"text\" value=\"Are you my girlfriend?\"/></p>\n    <p>Use binding: I send you a message:<br>\n    <input type=\"text\" [value]=\"value\"/></p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
//# sourceMappingURL=one.component.js.map