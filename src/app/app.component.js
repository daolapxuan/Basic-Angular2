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
var one_component_1 = require('./one.component');
// import { Test } from './test';
var AppComponent = (function () {
    function AppComponent() {
        this.vi = 'DLX';
        this.agree = 0;
        this.disagree = 0;
        this.names = ['A', 'B', 'C', 'D', 'E'];
    }
    AppComponent.prototype.parentVote = function (agree) {
        if (agree) {
            this.agree++;
        }
        else {
            this.disagree++;
        }
    };
    AppComponent.prototype.changeName = function () {
        this.oneComponent.setName('Some name in Parent');
    };
    __decorate([
        core_1.ViewChild(one_component_1.OneComponent), 
        __metadata('design:type', one_component_1.OneComponent)
    ], AppComponent.prototype, "oneComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /* This is @Input in Test component:
            template: `
            <h2>Hello {{vi}}</h2>
            Import a text: <input type="text" #tName (keyup)="0" />
            <test [test]="tName.value"></test>
            `
             */
            template: "\n  <h2>Hi {{vi}}</h2>\n  <p>Agree: {{agree}}; Disagree: {{disagree}}</p>\n  <button (click)=\"changeName()\">Change Name</button>\n  <my-app1 *ngFor=\"let n of names\" [name]=\"n\" (onVote)=\"parentVote($event)\"></my-app1>\n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map