import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h2>Hi {{name}}</h2>
  <my-app1></my-app1>
  `
})
export class AppComponent { name = 'Thanh Vi'; }
