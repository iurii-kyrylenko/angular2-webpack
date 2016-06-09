export { Injectable } from '@angular/core';

export class DataService {
    
    private _data = {counter: 0};

    get data() {
        return this._data;
    }

    constructor(timeout: number = 500) {
        setInterval(() => {
            this._data.counter++;
        }, timeout);
    }
}