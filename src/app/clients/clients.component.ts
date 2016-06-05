import { Component, OnInit } from '@angular/core';

import { IClient } from './client';
import { ClientsService } from './clients.service';
import { ClientsGrid } from './clients-grid.component';

@Component({
    template: `
        <h3>CLIENTS</h3>
        <button (click)="test1()">Mutation</button>
        <button (click)="test2()">No mutation</button>
        <clients-grid [clients]="clients"></clients-grid>
    `,
    providers: [ClientsService],
    directives: [ClientsGrid]
})
export class ClientsComponent implements OnInit {

    private _clients: IClient[];

    private _counter = 0;

    get clients() {
        console.log(`parent: ${++this._counter}`);
        return this._clients;
    }

    set clients(value) {
        this._clients = value;
    }

    constructor(private clientsService: ClientsService) { }

    ngOnInit() {
        this.clientsService.getClients().delay(1000).subscribe(
            clients => this.clients = clients);
    }

    test1() {
        this.clients.push({"Client": "client #1111", "Email": "1111" });
    }

    test2() {
        this.clients = this.clients.concat({ "Client": "client #2222", "Email": "2222" });
    }
}
