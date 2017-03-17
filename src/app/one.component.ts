import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    `
})

export class OneComponent {
    name = 'DLX';
} 