import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task1Component } from './task1.component';

@NgModule({
    imports: [CommonModule],
    declarations: [Task1Component],
    exports: [Task1Component]
})
export class Task1Module {}
