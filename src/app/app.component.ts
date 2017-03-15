import { Component, ViewChild } from '@angular/core';
import { OneComponent } from './one.component';

// import { Test } from './test';

@Component({
  selector: 'my-app',
  /* This is @Input in Test component:
  template: `
  <h2>Hello {{vi}}</h2>
  Import a text: <input type="text" #tName (keyup)="0" />
  <test [test]="tName.value"></test>
  `
   */
  template: `
  <h2>Hi {{vi}}</h2>
  <p>Agree: {{agree}}; Disagree: {{disagree}}</p>
  <button (click)="changeName()">Change Name</button>
  <my-app1 *ngFor="let n of names" [name]="n" (onVote)="parentVote($event)"></my-app1>
  `,
})

export class AppComponent {
  vi = 'DLX';

  agree: number = 0;
  disagree: number = 0;
  names = ['A', 'B', 'C', 'D', 'E'];

  parentVote(agree: boolean) {
    if (agree) { this.agree++; }
    else { this.disagree++; }
  }

  // Change a new name
  @ViewChild(OneComponent)
  private oneComponent: OneComponent;

  changeName() {
    this.oneComponent.setName('Some name in Parent');
  }

  /* This part is Test:
  @ViewChild(Test)
  private test: Test;

  changeName() {
    this.test.setName('Some name in Parent');
  }
  */
}
