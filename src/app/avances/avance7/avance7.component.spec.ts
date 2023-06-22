import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance7Component } from './avance7.component';

describe('Avance7Component', () => {
  let component: Avance7Component;
  let fixture: ComponentFixture<Avance7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance7Component]
    });
    fixture = TestBed.createComponent(Avance7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
