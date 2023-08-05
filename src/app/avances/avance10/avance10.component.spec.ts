import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance10Component } from './avance10.component';

describe('Avance10Component', () => {
  let component: Avance10Component;
  let fixture: ComponentFixture<Avance10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance10Component]
    });
    fixture = TestBed.createComponent(Avance10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
