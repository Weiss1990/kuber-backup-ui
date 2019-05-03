import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleDescriptionComponent } from './schedule-description.component';

describe('ScheduleDescriptionComponent', () => {
  let component: ScheduleDescriptionComponent;
  let fixture: ComponentFixture<ScheduleDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
