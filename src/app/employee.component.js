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
var employee_service_1 = require('./services/employee.service');
var EmployeeComponent = (function () {
    // Must use constructor to initialize service type
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
        this.employees = [
            { Id: 1, Name: 'Đào Lập Xuân' },
            { Id: 2, Name: 'Nguyễn Thị Thanh Vi' },
            { Id: 3, Name: 'Mai Thị Cẩm Tú' },
            { Id: 4, Name: 'Nguyễn Trung Hiếu' }
        ];
    }
    // Use OnInit to get datas from Service
    // To use OnInit, we must import it from angular/core
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employees1 = this.employeeService.getList();
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee',
            templateUrl: 'app/employee.component.html',
        }), 
        __metadata('design:paramtypes', [employee_service_1.EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map