import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OneComponent } from './one.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [  AppComponent, OneComponent ],
  bootstrap:    [  AppComponent, OneComponent ]
})
export class AppModule { }