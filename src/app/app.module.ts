import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { OneComponent } from './one.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [  AppComponent, OneComponent ],
  bootstrap:    [  AppComponent, OneComponent ]
})
export class AppModule { }