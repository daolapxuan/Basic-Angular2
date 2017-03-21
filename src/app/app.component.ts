import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})

export class AppComponent {
  title = 'Lesson 17: Form Validation (2)';

  // City list
  cities = [
    { Id: 1, Name: "An Giang" },
    { Id: 2, Name: "Bến Tre" },
    { Id: 3, Name: "Cần Thơ" },
    { Id: 4, Name: "Hồ Chí Minh" },
    { Id: 5, Name: "Vũng Tàu" }
  ];

  // Submit func
  clickSubmit(value: any) {
    console.log(value);
  }
}
