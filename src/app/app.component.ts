import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { Task1Component } from './task-1/task1.component';
import { Task2Component } from './task-2/task2.component';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/task1', name: 'Task1', component: Task1Component, useAsDefault: true},
    {path: '/task2', name: 'Task2', component: Task2Component},
])
export class AppComponent { }
