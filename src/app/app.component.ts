import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{text1 | uppercase}}</h1>
  <h2>{{text2 | lowercase}}</h2>
  <p>Time now: {{today | date: 'fullDate'}}</p>
  <p>Percent number: {{a | percent}}; {{b | percent:'5.3-7'}}</p>
  <p>Decimal number: {{e | number: '5.4-8'}}</p>
  <my-app1></my-app1>
  `
})
export class AppComponent {
  text1 = 'This is a text uses Uppercase Pipe';
  text2 = 'This is a text uses Lowercase Pipe';

  // today = new Date();
  today = Date.now();

  // percent
  a: number = 0.123;
  b: number = 1.234567;

  // decimal
  e: number = 122.12345678901234567;
}
