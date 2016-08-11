import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModuleFactoryLoader } from '@angular/core';
import { AsyncNgModuleLoader } from './utils/async-ng-module-loader';
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
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: NgModuleFactoryLoader, useClass: AsyncNgModuleLoader }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
