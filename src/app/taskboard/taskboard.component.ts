import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './taskboard.service';

@Component({
    template: `
        <h2>TASKBOARD</h2>
        <button (click)="getMockTasks()">Get Mock Tasks</button>
        <button (click)="getTasks()">Get Tasks</button>
        <ul>
            <li *ngFor="let task of tasks">
                {{task.RequiredAction}}
            </li>
        </ul>
    `,
    providers: [TaskService]})
export class TaskboardComponent {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    getMockTasks() {
        this.taskService.getMockTasks().then(tasks => this.tasks = tasks);
    }

    getTasks() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
}
