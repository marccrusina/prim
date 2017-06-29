import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInComponent } from './time-in.component';

describe('TimeInComponent', () => {
  let component: TimeInComponent;
  let fixture: ComponentFixture<TimeInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeInComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
