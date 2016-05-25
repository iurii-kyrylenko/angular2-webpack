import { Component } from '@angular/core';
import '../../public/css/styles.css';
import {Task} from './task';
import { TaskService } from './taskboard.service';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  providers: [TaskService]
})
export class AppComponent {
    tasks: Task[] = [];

    constructor(private taskService: TaskService) {}

    getMockTasks() {
        this.taskService.getMockTasks().then(tasks => this.tasks = tasks);
    }

    getTasks() {
        this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
    }
}
