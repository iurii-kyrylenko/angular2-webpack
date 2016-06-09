import { Component } from '@angular/core';

@Component({
    template: `
        <h3>Task-3: Attempt to change expression after checking</h3>
        <h4>!!! Do not neglect dev mode !!!</h4>
        <div>{{getCounter()}}</div>
    `
})
export class Task3Component {
    counter = 42;

    getCounter() {
        return this.counter;
        //return this.counter++;
    }
}
