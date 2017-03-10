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
        this.applyClass = true;
        this.redColor = true; // true: red and false: green
        this.image = 'http://lorempixel.com/200/200';
        this.style = true;
    }
    OneComponent = __decorate([
        core_1.Component({
            selector: 'my-app1',
            template: "\n    <h3 [class.blueCl]=\"applyClass\">My name is {{name}}</h3>\n    <h4 [style.color]=\"redColor?'red':'green'\">I want to gift you a picture:</h4>\n    <img [src]=\"image\" />\n    <p [class.style-1]=\"style\">I love you :)</p>\n    ",
            styles: ["\n    .blueCl {\n        color: blue;\n    }\n\n    .style-1 {\n        font-family: Candara, sans-serif;\n        color: white;\n        background-color: black;\n    }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], OneComponent);
    return OneComponent;
}());
exports.OneComponent = OneComponent;
//# sourceMappingURL=one.component.js.map