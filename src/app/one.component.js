// Structural Directive
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
        this.showIfLine = true;
        this.color = 'blue';
        this.colors = ["red", "green", "blue"];
    }
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <h2>My name is {{name}}</h2>\n    <button>On/Off</button>\n    <h3 *ngIf=\"showIfLine\">This is ngIf Directive Line.</h3>\n    Import color: <input type=\"text\" #cl/>\n    <div [ngSwitch]=\"color\">\n        <p *ngSwitchCase=\"'red'\">This is color red</p>\n        <p *ngSwitchCase=\"'green'\">This is color green</p>\n        <p *ngSwitchCase=\"'blue'\">This is color blue</p>\n        <p *ngSwitchDefault>No color</p>\n    </div>\n    <p>Export elements of an array, with elements in class:</p>\n    <ul>\n        <li *ngFor=\"let color of colors\">{{color}}</li>\n    </ul>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
/*
How to
- Exercise 1: Create a button to on/off ngIf
- Exercise 2: Create a input, when import color in that, it will show text
- Exercise 3: Import elements of an array from keyboard and export that on screen
 */ 
//# sourceMappingURL=one.component.js.map