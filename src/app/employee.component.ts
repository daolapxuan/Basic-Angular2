import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './services/employee.service';

@Component({
    selector: 'employee',
    templateUrl: 'app/employee.component.html',
    
})

export class EmployeeComponent implements OnInit {
    employees: any[] = [
        { Id: 1, Name: 'Đào Lập Xuân' },
        { Id: 2, Name: 'Nguyễn Thị Thanh Vi' },
        { Id: 3, Name: 'Mai Cẩm Tú' },
        { Id: 4, Name: 'Nguyễn Trung Hiếu' }
    ];

    // Use and call EmployeeService

    // Declare an array
    employees1: any[];

    // Must use constructor to initialize service type
    constructor(private employeeService : EmployeeService) { }

    // Use OnInit to get datas from Service
    // To use OnInit, we must import it from angular/core
    ngOnInit() {
        this.employees1 = this.employeeService.getList();
    }
}
