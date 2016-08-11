import { Routes, RouterModule } from '@angular/router';
import { Task1Component } from './task-1/task1.component';
import { load } from './utils/async-ng-module-loader';

export const routes: Routes = [
    { path: '', redirectTo: 'task1', pathMatch: 'full' },
    { path: 'task1', component: Task1Component },
    {
        path: 'task2',
        loadChildren: load(() => new Promise(resolve => {
            (require as any).ensure([], (require: any) => {
                resolve(require('./task-2/task2.module').Task2Module);
            })
        }))
    }
];

export const routing = [
    RouterModule.forRoot(routes)
];
