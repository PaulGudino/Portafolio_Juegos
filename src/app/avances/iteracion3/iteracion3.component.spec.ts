import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Iteracion3Component } from './iteracion3.component';

describe('Iteracion3Component', () => {
  let component: Iteracion3Component;
  let fixture: ComponentFixture<Iteracion3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Iteracion3Component]
    });
    fixture = TestBed.createComponent(Iteracion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
