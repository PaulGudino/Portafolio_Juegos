import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance5Component } from './avance5.component';

describe('Avance5Component', () => {
  let component: Avance5Component;
  let fixture: ComponentFixture<Avance5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance5Component]
    });
    fixture = TestBed.createComponent(Avance5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
