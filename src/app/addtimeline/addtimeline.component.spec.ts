import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimelineComponent } from './addtimeline.component';

describe('AddtimelineComponent', () => {
  let component: AddtimelineComponent;
  let fixture: ComponentFixture<AddtimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddtimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
