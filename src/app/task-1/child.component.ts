import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { IItem } from './item';

@Component({
    selector: 'child',
    template: `
        <div *ngIf="!data">Loading...</div>
        <table class="gridtable">
            <tr *ngIf="data">
                <th>Name</th>
                <th>Age</th>
            <tr>
            <tr *ngFor="let item of data" (mousemove)="mouseMove()">
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
            </tr>
        </table>
    `,
    //changeDetection: ChangeDetectionStrategy.Default
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
    private _data: IItem;

    @Input() tag: string;

    private _counter = 0;

    @Input() get data() {
        console.log(`getting data (${this.tag}): ${++this._counter}`);
        return this._data;
    }

    set data(value) {
        this._data = value;
    }

    mouseMove() {
        console.log(`mouse moving (${this.tag})`);
    }
}
