// Two Ways Binding
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
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <h2>My name is {{name}}</h2>\n    <p>Press Your Name and It will show your Full name:</p>\n    Press First Name: <input type=\"text\" [(ngModel)]=\"fname\"/> \n    Press Last name: <input type=\"text\" [(ngModel)]=\"lname\"/><br/><br/>\n    Your Full Name: {{fname}} {{lname}} \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
/*
How to:
- Q1: Import two numbers from keyboard and export Sum of those two numbers
 */ 
//# sourceMappingURL=one.component.js.map