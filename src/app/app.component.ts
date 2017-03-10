import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Hi {{name}}</h1>
  <h3>This is MainComponent</h3>
  <my-app1></my-app1>
  `,
  styles: ['h3 {color: red;}']
})
export class AppComponent { name = 'Thanh Vi'; }
