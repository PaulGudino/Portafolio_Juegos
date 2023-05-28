import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance2Component } from './avance2.component';

describe('Avance2Component', () => {
  let component: Avance2Component;
  let fixture: ComponentFixture<Avance2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance2Component]
    });
    fixture = TestBed.createComponent(Avance2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
