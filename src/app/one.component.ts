// One way binding

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h3 [class.blueCl]="applyClass">My name is {{name}}</h3>
    <h4 [style.color]="redColor?'red':'green'">I want to gift you a picture:</h4>
    <img [src]="image" />
    <p [class.style-1]="style">I love you :)</p>
    `,
    styles: [`
    .blueCl {
        color: blue;
    }

    .style-1 {
        font-family: Candara, sans-serif;
        color: white;
        background-color: black;
    }
    `]
})

export class OneComponent {
    name = 'DLX';
    applyClass = true;
    redColor = true;   // true: red and false: green
    image = 'http://lorempixel.com/200/200';
    style = true;
    
}  