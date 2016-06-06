import { Component, OnInit, Input } from '@angular/core';
import { DataService } from './data.service';
import { IItem } from './item';
import { ChildComponent } from './child.component';

@Component({
    selector: 'parent',
    template: `
        <div class="parent">
            <p>
                <button (click)="addItem1()">+ m</button>
                <button (click)="addItem2()">+ i</button>
            </p>
            <child [tag]="tag" [data]="data"></child>
        <div>
    `,
    styles: [`
        .parent {
            display:inline-block;
            margin: 10px
        }
    `],
    directives: [ChildComponent]
})
export class ParentComponent implements OnInit {

    @Input() tag: string;

    data: IItem[];

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe(data => this.data = data);
    }

    addItem1() {
        if (!this.data) return;
        this.data.push({name: 'new', age: 11});
    }

    addItem2() {
        if (!this.data) return;
        this.data = this.data.concat({name: 'new', age: 11});
    }
}
