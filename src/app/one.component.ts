// Event Binding

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <h3 *ngIf="showIfLine" #show>This is ngIf Directive Line.</h3>
    <button (click)="showIf(show)">Show</button>
    `
})

export class OneComponent {
    name = 'DLX';

    showIfLine = true;

    showIf(value:boolean) {
        if (value == true) {
            value = false;
        }
        if (value == false) {
            value = true;
        }
    }
}    