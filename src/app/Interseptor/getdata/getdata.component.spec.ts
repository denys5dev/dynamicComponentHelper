/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GetdataComponent } from './getdata.component';

describe('GetdataComponent', () => {
  let component: GetdataComponent;
  let fixture: ComponentFixture<GetdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
