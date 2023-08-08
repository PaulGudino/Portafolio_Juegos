import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteracion2Component } from './iteracion2.component';

describe('Iteracion2Component', () => {
  let component: Iteracion2Component;
  let fixture: ComponentFixture<Iteracion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iteracion2Component]
    });
    fixture = TestBed.createComponent(Iteracion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
