import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteracion1Component } from './iteracion1.component';

describe('Iteracion1Component', () => {
  let component: Iteracion1Component;
  let fixture: ComponentFixture<Iteracion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iteracion1Component]
    });
    fixture = TestBed.createComponent(Iteracion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
