import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackpagesComponent } from './backpages.component';

describe('BackpagesComponent', () => {
  let component: BackpagesComponent;
  let fixture: ComponentFixture<BackpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
