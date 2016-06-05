import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {DataTable, Column} from 'primeng/primeng';
import { IClient } from './client';

import 'primeui/themes/omega/theme.css';
import 'primeui/primeui-ng-all.css';

@Component({
    selector: 'clients-grid',
    template: `
        <p-dataTable [value]="clients">
            <p-column field="Client" header="Client"></p-column>
            <p-column field="Email" header="Email"></p-column>
        </p-dataTable>
        `,
    directives: [DataTable, Column],
    //changeDetection: ChangeDetectionStrategy.OnPush
    changeDetection: ChangeDetectionStrategy.Default
})
export class ClientsGrid {

    _clients: IClient[];

    private _counter = 0;

    @Input() get clients() {
        console.log(`        child: ${++this._counter}`);
        return this._clients;
    }

    set clients(value) {
        this._clients = value;
    }

}