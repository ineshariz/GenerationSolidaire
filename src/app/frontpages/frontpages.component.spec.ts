import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontpagesComponent } from './frontpages.component';

describe('FrontpagesComponent', () => {
  let component: FrontpagesComponent;
  let fixture: ComponentFixture<FrontpagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontpagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
