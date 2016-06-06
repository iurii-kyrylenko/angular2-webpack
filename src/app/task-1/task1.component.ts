import { Component } from '@angular/core';
import { ParentComponent } from './parent.component';
import { DataService } from './data.service';

@Component({
    template: `
        <h3>Task-1</h3>
        <parent [tag]="1"></parent>
        <parent [tag]="2"></parent>
    `,
    directives: [ParentComponent],
    providers: [DataService]
})
export class Task1Component {}
