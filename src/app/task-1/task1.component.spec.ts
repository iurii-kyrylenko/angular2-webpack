import { TestBed } from '@angular/core/testing';
import { Task1Component } from './task1.component';

describe('Task1', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [Task1Component]});
  });

  it ('should create Task1Component', () => {
    let fixture = TestBed.createComponent(Task1Component);
    expect(fixture.componentInstance instanceof Task1Component).toBe(true);
  });
});
