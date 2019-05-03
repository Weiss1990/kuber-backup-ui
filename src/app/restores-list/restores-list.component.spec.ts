import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoresListComponent } from './restores-list.component';

describe('RestoresListComponent', () => {
  let component: RestoresListComponent;
  let fixture: ComponentFixture<RestoresListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoresListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoresListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
