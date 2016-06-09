export { Injectable } from '@angular/core';

export class DataService {
    
    private _data = {counter: 0};
    private _timer: any;

    get data() {
        return this._data;
    }

    constructor(timeout: number = 500) {
        this._timer = setInterval(() => {
            this._data.counter++;
        }, timeout);
    }

    stop() {
        clearInterval(this._timer);
    }
}
