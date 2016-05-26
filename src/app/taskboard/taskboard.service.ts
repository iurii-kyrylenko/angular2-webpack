import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Task } from './task';
import { TASKS } from './mock-tasks';

@Injectable()
export class TaskService {

    constructor(private http: Http) {}

    private tasksUrl = 'http://hli-intake.epam.com/clinician/TaskBoard/GetTasks?Rows=10&Page=1';

    getMockTasks(): Observable<Task[]> {
        return Observable.of({}).map(x => TASKS);
    }

    getTasks(): Observable<Task[]> {
        return this.http
            .get(this.tasksUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response): Task[] {
        let body = res.json();
        console.log(body);
        return body.rows;
    }

    private handleError(error: any): Observable<Task[]> {
        console.log(error);
        return Observable.throw(')-: cannot get tasks :-(');
    }
}
