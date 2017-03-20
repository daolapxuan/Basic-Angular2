import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  title = 'Lesson 16: Form Validation';

  // Submit func
  clickSubmit(value: any) {
    console.log(value);
  }
}
