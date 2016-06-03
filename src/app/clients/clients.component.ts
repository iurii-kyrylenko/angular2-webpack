import { Component, OnInit } from '@angular/core';
import {DataTable, Column} from 'primeng/primeng';

import { IClient } from './client';
import { ClientsService } from './clients.service';

import 'primeui/themes/omega/theme.css';
import 'primeui/primeui-ng-all.css';

@Component({
    template: `
        <h3>CLIENTS</h3>
        <p-dataTable [value]="clients">
            <p-column field="Client" header="Client"></p-column>
            <p-column field="Email" header="Email"></p-column>
        </p-dataTable>
    `,
    providers: [ClientsService],
    directives: [DataTable, Column]
})
export class ClientsComponent implements OnInit {
    clients: IClient[];

    constructor(private clientsService: ClientsService) { }

    ngOnInit() {
        this.clientsService.getClients().subscribe(
            clients => this.clients = clients);
    }
}
