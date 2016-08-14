import { Routes, RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModuleFactoryLoader } from '@angular/core';
import { AsyncNgModuleLoader, load } from './utils/async-ng-module-loader';
import { Task1Component } from './task-1/task1.component';

const routes: Routes = [
    { path: '', redirectTo: 'task1', pathMatch: 'full' },
    { path: 'task1', component: Task1Component },
    { path: 'task2', loadChildren: load(() =>
        new Promise(resolve =>
            (require as any).ensure([], () =>
                resolve(require('./task-2/task2.module'))
            )
        ), 'Task2Module')
    }
];

export const routing = [
    RouterModule.forRoot(routes)
];

export const appRoutingProviders = [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
];
