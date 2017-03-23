import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
    getList(): any[] {
        let employees1: any[] = [
            {Id: 1, Name: 'Đào Văn Dũng Tiến'},
            {Id: 2, Name: 'Quách Thị Bê'},
            {Id: 3, Name: 'Đào Thị Thanh Tâm'},
            {Id: 4, Name: 'Đào Nam Huy'},
            {Id: 5, Name: 'Đào Thị Văn Chương'},
            {Id: 6, Name: 'Đào Thiện Khánh'},
        ];

        return employees1;
    }
}