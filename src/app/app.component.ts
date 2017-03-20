import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent {
  title = "Lesson 15: Building Form from Template";

  // Submit button
  onSubmit(value: any) {
    console.log(value);
  }
}
