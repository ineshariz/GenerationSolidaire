import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListVolontaireComponent } from './list-volontaire.component';

describe('ListVolontaireComponent', () => {
  let component: ListVolontaireComponent;
  let fixture: ComponentFixture<ListVolontaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListVolontaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListVolontaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
