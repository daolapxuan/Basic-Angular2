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
var EmployeeService = (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getList = function () {
        var employees1 = [
            { Id: 1, Name: 'Đào Văn Dũng Tiến' },
            { Id: 2, Name: 'Quách Thị Bê' },
            { Id: 3, Name: 'Đào Thị Thanh Tâm' },
            { Id: 4, Name: 'Đào Nam Huy' },
            { Id: 5, Name: 'Đào Thị Văn Chương' },
            { Id: 6, Name: 'Đào Thiện Khánh' },
        ];
        return employees1;
    };
    EmployeeService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map