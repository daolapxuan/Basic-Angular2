// Attribute Directive
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
        // On/Off fields of .class1 and .class2 in CSS
        this.cOne = true;
        this.cTwo = true;
        // Style of ngStyle
        this.style = "italic";
        this.color = "grey";
        this.size = "20px";
    }
    // On/Off function
    OneComponent.prototype.switch = function () {
        this.cOne = !this.cOne;
        this.cTwo = !this.cTwo;
    };
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <h2>My name is {{name}}</h2>\n    <p [ngClass]=\"{class1:cOne, class2:cTwo}\">This ngClass applies CSS</p>\n    <button (click)=\"switch()\">On/Off CSS</button>\n    <p [ngStyle]=\"{'font-style':style, 'background-color':color, 'font-size':size}\">This text will be applied to ngStyle</p>\n    ",
            styles: ["\n    h3 {\n        color: grey;\n    }\n    .class1 {\n        color: white;\n        font-family: arial;\n    }\n    .class2 {\n        background-color: black;\n        font-size: 20px;\n    }\n    "]
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