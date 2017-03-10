// Event Binding

import { Component } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>My name is {{name}}</h2>
    <p>Press Your Name and It will show your Full name:</p>
    Press First Name: <input type="text" [(ngModel)]="fname"/> 
    Press Last name: <input type="text" [(ngModel)]="lname"/><br/><br/>
    Your Full Name: {{fname}} {{lname}} 
    `
})

export class OneComponent {
    name = 'DLX';
}  