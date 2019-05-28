import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnamnesePage } from './anamnese.page';

describe('AnamnesePage', () => {
  let component: AnamnesePage;
  let fixture: ComponentFixture<AnamnesePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnamnesePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnamnesePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
