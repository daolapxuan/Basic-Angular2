import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
    selector: 'test',
    /*template: `
    <p>This is text: {{test}}</p>
    `*/
    // @Output
    template: `
    <p>This is text: {{test}}</p>

    <p>Child Component name: {{name}}</p>
    <button [disabled]="voted" (click)="vote(true)">Agree</button>
    <button [disabled]="voted" (click)="vote(false)">Disagree</button>
    <p>Result: {{voted}}</p>
    `
     
})

export class Test {
    // @Input
    @Input() test: string;

    
    // @Output:
    @Input() name: string;
    @Output() onVote = new EventEmitter<boolean>();

    voted: boolean = false;

    vote(agree: boolean) {
        this.voted = true;
        this.onVote.emit(agree);
    }
    

    // Set a new name for first element of names array
    setName(n: string) {
        this.name = n;
    }
}