import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtimelineComponent } from './viewtimeline.component';

describe('ViewtimelineComponent', () => {
  let component: ViewtimelineComponent;
  let fixture: ComponentFixture<ViewtimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
