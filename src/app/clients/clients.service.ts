import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { IClient } from './client';
import {DataTable} from 'primeng/primeng';

@Injectable()
export class ClientsService {

    getClients(): Observable<IClient[]> {
        return Observable.of([
            {"Client": "client #1", "Email": "client-1@abc.com"},
            {"Client": "client #2", "Email": "client-2@abc.com"},
            {"Client": "client #3", "Email": "client-3@abc.com"},
            {"Client": "client #4", "Email": "client-4@abc.com"},
            {"Client": "client #5", "Email": "client-5@abc.com"},
            {"Client": "client #6", "Email": "client-6@abc.com"},
            {"Client": "client #7", "Email": "client-7@abc.com"},
            {"Client": "client #8", "Email": "client-8@abc.com"},
        ]);
    }
}
