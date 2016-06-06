import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IItem } from './item';

@Injectable()
export class DataService {
    getData(): Observable<IItem[]> {
        return Observable.of([
            {name: 'name-1', age: 18},
            {name: 'name-2', age: 19}
        ]).delay(1000);
    }
}
