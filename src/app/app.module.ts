import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OneComponent } from './one.component'; // One component
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component'; //
import { EmployeeService } from './services/employee.service'; //

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  AppComponent, OneComponent, EmployeeComponent ],
  // To use Service, declare providers:
  providers: [EmployeeService],
  bootstrap:    [  AppComponent ]
})
export class AppModule { }