import { Component } from '@angular/core';
import { Task } from './task';
import { TaskService } from './taskboard.service';

@Component({
    template: require('./taskboard.component.html'),
    styles: [require('./taskboard.component.css')],
    providers: [TaskService]})
export class TaskboardComponent {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    getMockTasks() {
        this.taskService.getMockTasks().subscribe(tasks => this.tasks = tasks);
    }

    getTasks() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
}
