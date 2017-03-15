import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'my-app1',
    template: `
    <h2>{{vi}}</h2>
    <p>Child Component name: {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disagree</button>
    <p>Result: {{voted}}</p>
    `
})

export class OneComponent {

    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();

    voted: boolean = false;
    
    // vote function
    vote(agree: boolean) {
        this.voted = true;
        this.onVote.emit(agree);
    }

    // Set a new name for first element of names array
    setName(n: string) {
        this.name = n;
    }
}