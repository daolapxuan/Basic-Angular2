// One way binding

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <p>Don't use binding: My name is <strong>DLX</strong></p>
    <p>Use binding: My name is <strong>{{name}}</strong>
    <p>Don't use binding: I gift you a picture:<br/>
    <img src="http://lorempixel.com/200/200" />
    </p>
    <p>Use binding: I gift you a picture:<br>
    <img [src]='image' /></p>
    <p>Don't use binding: I send you a message:<br>
    <input type="text" value="Are you my girlfriend?"/></p>
    <p>Use binding: I send you a message:<br>
    <input type="text" [value]="value"/></p>
    `
})

export class OneComponent {
    name = 'DLX';
    image = 'http://lorempixel.com/200/200';
    value = 'Do you marry me?'
}