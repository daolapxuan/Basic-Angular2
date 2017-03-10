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
    }
    OneComponent.prototype.OnClick = function () {
        console.log("Clicked");
    };
    OneComponent.prototype.MouseOver = function (val) {
        console.log(val);
    };
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <h2>My name is {{name}}</h2>\n    <button (click)=\"OnClick()\">OnClick Event</button>\n    <button (mouseover)=\"MouseOver(val.value)\">MouseOver Event</button>\n    <input type=\"text\" #val/>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
//# sourceMappingURL=one.component.js.map