import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance1Component } from './avance1.component';

describe('Avance1Component', () => {
  let component: Avance1Component;
  let fixture: ComponentFixture<Avance1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance1Component]
    });
    fixture = TestBed.createComponent(Avance1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
