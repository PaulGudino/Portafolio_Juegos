import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance6Component } from './avance6.component';

describe('Avance6Component', () => {
  let component: Avance6Component;
  let fixture: ComponentFixture<Avance6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance6Component]
    });
    fixture = TestBed.createComponent(Avance6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
