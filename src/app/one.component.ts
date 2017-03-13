// Structural Directive

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <button>On/Off</button>
    <h3>This is ngIf Directive</h3>
    <h4 *ngIf="showIfLine">This is ngIf Directive Line.</h4>
    <h3>this is ngSwitch Directive</h3>
    Import color: <input type="text" #cl/>
    <div [ngSwitch]="color">
        <p style="color:red;" *ngSwitchCase="'red'">This is color red</p>
        <p style="color:green;" *ngSwitchCase="'green'">This is color green</p>
        <p style="color:blue;" *ngSwitchCase="'blue'">This is color blue</p>
        <p *ngSwitchDefault>No color</p>
    </div>
    <p>Export elements of an array, with elements in class:</p>
    <ul>
        <li *ngFor="let color of colors">{{color}}</li>
    </ul>
    `,
    styles: [`
    h3 {
        color: grey;
    }
    `]
})

export class OneComponent {
    name = 'DLX';

    showIfLine = true;

    color = 'red';

    colors: string[] = ["red", "green", "blue"];
}

/*
How to 
- Exercise 1: Create a button to on/off ngIf
- Exercise 2: Create a input, when import color in that, it will show text
- Exercise 3: Import elements of an array from keyboard and export that on screen
 */