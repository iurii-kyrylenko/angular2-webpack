import { provide} from '@angular/core';
import { describe, expect, it, inject} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/compiler/testing';
import { Observable } from 'rxjs';
import { ParentComponent } from './parent.component';
import { DataService } from './data.service';
import { IItem } from './item';

class MockDataService {
    getData(): Observable<IItem[]> {
        return Observable.of([]);
    }
}

describe('Parent Component', () => {
    it('should not update child when using mutable', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb
            .overrideProviders(ParentComponent,
            [provide(DataService, { useClass: MockDataService })])
            .createAsync(ParentComponent)
            .then(fixture => {
                fixture.detectChanges();
                const compiled = fixture.elementRef.nativeElement;
                const button = compiled.querySelector('#add-mutable');
                button.click();
                fixture.detectChanges();
                expect(!!compiled.querySelector('td')).toBe(false);
            });
    }));

    it('should update child when using immutable', inject([TestComponentBuilder], (tcb:TestComponentBuilder) => {
        return tcb
            .overrideProviders(ParentComponent,
            [provide(DataService, { useClass: MockDataService })])
            .createAsync(ParentComponent)
            .then(fixture => {
                fixture.detectChanges();
                const compiled = fixture.elementRef.nativeElement;
                const button = compiled.querySelector('#add-immutable');
                button.click();
                fixture.detectChanges();
                expect(!!compiled.querySelector('td')).toBe(true);
            });
    }));
});
