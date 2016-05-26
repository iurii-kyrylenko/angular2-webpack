import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ClientsComponent } from './clients/clients.component';
import { TaskboardComponent } from './taskboard/taskboard.component';

import '../../public/css/styles.css';

@Component({
    selector: 'my-app',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: '/clients', name: 'Clients', component: ClientsComponent, useAsDefault: true},
    {path: '/taskboard', name: 'Taskboard', component: TaskboardComponent},
])
export class AppComponent { }
