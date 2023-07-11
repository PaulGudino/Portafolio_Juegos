import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Avance8Component } from './avance8.component';

describe('Avance8Component', () => {
  let component: Avance8Component;
  let fixture: ComponentFixture<Avance8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Avance8Component]
    });
    fixture = TestBed.createComponent(Avance8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
