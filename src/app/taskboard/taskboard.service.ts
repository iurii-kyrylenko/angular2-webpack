import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    private tasksUrl = 'http://hli-intake.epam.com/clinician/TaskBoard/GetTasks?Rows=10&Page=1';

    getMockTasks(): Promise<Task[]> {
        return Promise.resolve(TASKS);
    }

    getTasks(): Observable<any[]> {
        return this.http
            .get(this.tasksUrl)
            .map(this.extractData);
    }

    extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body.rows;
    }
}
