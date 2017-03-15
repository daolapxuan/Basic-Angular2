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
var Test = (function () {
    function Test() {
        this.onVote = new core_1.EventEmitter();
        this.voted = false;
    }
    Test.prototype.vote = function (agree) {
        this.voted = true;
        this.onVote.emit(agree);
    };
    // Set a new name for first element of names array
    Test.prototype.setName = function (n) {
        this.name = n;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Test.prototype, "test", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Test.prototype, "name", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], Test.prototype, "onVote", void 0);
    Test = __decorate([
        core_1.Component({
            selector: 'test',
            /*template: `
            <p>This is text: {{test}}</p>
            `*/
            // @Output
            template: "\n    <p>This is text: {{test}}</p>\n\n    <p>Child Component name: {{name}}</p>\n    <button [disabled]=\"voted\" (click)=\"vote(true)\">Agree</button>\n    <button [disabled]=\"voted\" (click)=\"vote(false)\">Disagree</button>\n    <p>Result: {{voted}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Test);
    return Test;
}());
exports.Test = Test;
//# sourceMappingURL=test.js.map