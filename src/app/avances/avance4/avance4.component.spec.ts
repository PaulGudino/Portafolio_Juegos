import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance4Component } from './avance4.component';

describe('Avance4Component', () => {
  let component: Avance4Component;
  let fixture: ComponentFixture<Avance4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance4Component]
    });
    fixture = TestBed.createComponent(Avance4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
