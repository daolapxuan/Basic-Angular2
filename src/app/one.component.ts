// Attribute Directive

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <p [ngClass]="{class1:cOne, class2:cTwo}">This ngClass applies CSS</p>
    <button (click)="switch()">On/Off CSS</button>
    <p [ngStyle]="{'font-style':style, 'background-color':color, 'font-size':size}">This text will be applied to ngStyle</p>
    `,
    styles: [`
    h3 {
        color: grey;
    }
    .class1 {
        color: white;
        font-family: arial;
    }
    .class2 {
        background-color: black;
        font-size: 20px;
    }
    `]
})

export class OneComponent {
    name = 'DLX';

    // On/Off fields of .class1 and .class2 in CSS
    cOne = true;
    cTwo = true;
    
    // Style of ngStyle
    style = "italic";
    color = "grey";
    size = "20px";

    // On/Off function
    switch() {
        this.cOne = !this.cOne;
        this.cTwo = !this.cTwo;
    }
}

/*
How to 
- Exercise 1: Create a button to on/off ngIf
- Exercise 2: Create a input, when import color in that, it will show text
- Exercise 3: Import elements of an array from keyboard and export that on screen
 */