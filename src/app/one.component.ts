// One way binding

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <button (click)="OnClick()">OnClick Event</button>
    <button (mouseover)="MouseOver(val.value)">MouseOver Event</button>
    <input type="text" #val/>
    `
})

export class OneComponent {
    name = 'DLX';
    OnClick() {
        console.log("Clicked");
    }
    MouseOver(val:string) {
        console.log(val);
    }
}  