import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>Hello {{name}}</h2>
    <h2>What will you do today?</h2>
    <h2>Have you finished your 'List to do' yet?</h2>
    <hr>
    `
})

export class OneComponent {
    name = 'DLX';
}