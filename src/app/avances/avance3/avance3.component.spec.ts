import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance3Component } from './avance3.component';

describe('Avance3Component', () => {
  let component: Avance3Component;
  let fixture: ComponentFixture<Avance3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance3Component]
    });
    fixture = TestBed.createComponent(Avance3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
