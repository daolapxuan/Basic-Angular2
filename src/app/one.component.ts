import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <h3>This is OneComponent</h3>
    `,
    styles: ['h3 {color: blue;']
})

export class OneComponent {
    name = 'DLX';
}