import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { Task1Module } from './task-1/task1.module';

@NgModule({
    imports: [
        BrowserModule,
        Task1Module,
        routing
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
