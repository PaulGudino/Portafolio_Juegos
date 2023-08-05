import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance9Component } from './avance9.component';

describe('Avance9Component', () => {
  let component: Avance9Component;
  let fixture: ComponentFixture<Avance9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance9Component]
    });
    fixture = TestBed.createComponent(Avance9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
