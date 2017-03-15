import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OneComponent } from './one.component';
import { FormsModule } from '@angular/forms';

//  import { Test } from './test';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  // declarations: [  AppComponent, OneComponent, Test ],
  // bootstrap:    [  AppComponent, OneComponent, Test ]
  declarations: [  AppComponent, OneComponent ],
  bootstrap:    [  AppComponent, OneComponent ]
})
export class AppModule  { }